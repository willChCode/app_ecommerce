import React from 'react';
import Airpods from '../assets/airpods3.png';

interface Props {
  img: string;
  title: string;
  price: string;
  description: string;
  raiting: string;
  style: string;
}

export default function Card(props: Props) {
  return (
    <>
      <div className='card card-compact w-52 shadow-lg '>
        {/* IMAGEN */}
        <figure className='bg-gray-300'>
          <img src={props.img} alt='Shoes' className={props.style} />
        </figure>
        <div className='card-body'>
          {/* TITLE */}
          <h2 className='card-title -mt-2'>{props.title}</h2>
          {/* PRICE */}

          <span className='text-lg font-bold -mt-3'>{props.price} $</span>

          {/* RAITING */}
          <div className='rating rating-sm -mt-1'>
            <input
              type='radio'
              name='rating-4'
              className='mask mask-star-2 bg-green-500'
            />
            <input
              type='radio'
              name='rating-4'
              className='mask mask-star-2 bg-green-500'
            />
            <input
              type='radio'
              name='rating-4'
              className='mask mask-star-2 bg-green-500'
            />
            <input
              type='radio'
              name='rating-4'
              className='mask mask-star-2 bg-green-500'
            />
            <input
              type='radio'
              name='rating-4'
              className='mask mask-star-2 bg-green-500'
            />
            <span className='font-bold ml-2 text-gray-500'>+20k </span>
          </div>
          {/* DESCRIPTION */}
          <p>If a dog chews shoes whose shoes does he choose?</p>
          {/* BUTTON */}
          <div className='card-actions justify-end'>
            <button className='btn btn-sm btn-outline font-bold '>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
