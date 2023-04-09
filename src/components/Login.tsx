import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@material-tailwind/react';
import { useState } from 'react';
import { FormValues, initialStateform } from '../types/Types';
import { loginPost } from '../services/Login';
import { toast } from 'react-toastify';

export default function Login() {
  const [inputForm, setInputForm] = useState<FormValues>(initialStateform);
  const navigate = useNavigate();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await loginPost(inputForm);
    const message = res.data.message;
    toast.success(message);
    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='container m-auto flex flex-col gap-4 items-center py-4'>
      <h1 className='font-bold text-xl'>Login</h1>
      <section className='flex gap-4'>
        <Input
          name='email'
          onChange={handleChangeInput}
          color='teal'
          label='Email'
        />
        <Input
          name='password'
          onChange={handleChangeInput}
          color='teal'
          label='Password'
        />
      </section>
      <span className='font-bold text-sm'>
        Not already account?{' '}
        <Link to='/register' className='link link-success'>
          Register
        </Link>
      </span>
      {/* <Checkbox color='teal' defaultChecked label='Remember Me' /> */}
      <button className='btn btn-sm btn-accent'>Login</button>
    </form>
  );
}
