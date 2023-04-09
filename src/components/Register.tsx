import { useState } from 'react';
import { Input, Checkbox } from '@material-tailwind/react';
import { userPost } from '../services/Users';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FormValues, initialStateform } from '../types/Types';

export default function Register() {
  const [formValues, setFormValues] = useState<FormValues>(initialStateform);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: name === 'age' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await userPost(formValues);
    // console.log(res.data.message);
    const { message, nuevoUsuario } = res.data;
    toast.success(`${nuevoUsuario.name} tu cuenta fue creado`);
    setFormValues(initialStateform);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='container m-auto flex flex-col gap-4 items-center py-4'>
        <h1 className='font-bold text-xl'>Register</h1>
        <section className='flex gap-4'>
          <Input
            name='name'
            onChange={handleInputChange}
            color='teal'
            label='Name'
          />
          <Input
            name='email'
            onChange={handleInputChange}
            color='teal'
            label='Email'
          />
        </section>
        <section className='flex gap-4'>
          <Input
            name='age'
            onChange={handleInputChange}
            type='number'
            color='teal'
            label='Age'
          />
          <Input
            name='password'
            onChange={handleInputChange}
            type='password'
            color='teal'
            label='Password'
          />
        </section>
        <span className='font-bold text-sm'>
          Already account?{' '}
          <Link to='/login' className='link link-success'>
            Login
          </Link>
        </span>
        {/* <Checkbox color='teal' defaultChecked label='Remember Me' /> */}
        <button className='btn btn-sm btn-accent'>Register</button>
      </form>
    </>
  );
}
