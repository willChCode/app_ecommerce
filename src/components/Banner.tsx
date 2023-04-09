import React from 'react';
import Zapato from '../assets/zapato.png';

export default function Banner() {
  return (
    <div className='container m-auto flex w-fit items-center bg-[#FCF0E4]'>
      <section className=' w-1/2'>
        <h1 className='font-bold text-3xl text-green-800'>
          Grab upto 50% Off On Selected Shoes
        </h1>
        <button className='btn mt-2 bg-green-800 border-0'>Buy Now</button>
      </section>
      <section className='p-4 m-auto'>
        <img src={Zapato} alt='' className='w-48' />
      </section>
    </div>
  );
}
