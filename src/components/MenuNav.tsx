import React from 'react';

export default function MenuNav() {
  return (
    <div className='flex items-center justify-center mt-3'>
      <div className='text-sm breadcrumbs font-bold '>
        <ul>
          <li>
            <a>Shoes</a>
          </li>
          <li>
            <a>Shirts</a>
          </li>
          <li>
            <a>Boys</a>
          </li>
          <li>
            <a>Girls</a>
          </li>
          <li>
            <a>Men</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
