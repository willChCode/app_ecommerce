import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar
} from '@material-tailwind/react';

export default function Dashboard() {
  return (
    <div className='container m-auto py-8 flex flex-wrap gap-4 border-2 justify-center'>
      <div className='card bg-base-100 shadow-xl image-full w-[13rem] h-[10rem]'>
        <figure>
          <img
            className='w-[13rem]'
            src='https://i.pinimg.com/564x/b0/7f/54/b07f549ed8acf19cd9361afe26c65afb.jpg'
            alt='Shoes'
          />
        </figure>

        <div className='card-body flex justify-center items-center'>
          <h3 className='text-center'>Quieres agregar Productos?</h3>
          <button className='btn btn-secondary btn-sm'>Add Product</button>
        </div>
      </div>
      <div className='card bg-base-100 shadow-xl image-full w-[13rem] h-[10rem]'>
        <figure>
          <img
            className='w-[13rem]'
            src='https://i.pinimg.com/564x/b0/7f/54/b07f549ed8acf19cd9361afe26c65afb.jpg'
            alt='Shoes'
          />
        </figure>

        <div className='card-body flex justify-center items-center'>
          <h3 className='text-center'>Quieres listar los productos?</h3>
          <button className='btn btn-accent btn-sm'>List Products</button>
        </div>
      </div>
    </div>
  );
}
