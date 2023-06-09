import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useNavigate, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

type UserLogType = string;

export default function NavBar() {
  // const Navigate = useNavigate();
  const [cookies] = useCookies(['token']);
  const [userLog, setUserLog] = useState<UserLogType>();
  useEffect(() => {
    const miCookieValue = cookies.token;
    if (miCookieValue) {
      setUserLog(miCookieValue);
    }
  }, []);
  console.log(userLog);
  return (
    <div className='navbar bg-base-100 shadow-[0px_2px_2px_0px_rgba(173,173,173,0.75)] container m-auto'>
      {/* NAVBAR START */}
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 rounded-box w-fit shadow-lg bg-white'>
            <form className='flex items-center'>
              <input
                type='text'
                placeholder='Search'
                className='w-auto py-1 px-3 outline-none border-2 rounded-full'
              />
              <button type='submit' className='btn btn-ghost btn-sm btn-circle'>
                <BiSearch className='text-lg' />
              </button>
            </form>
            <li>
              <Link to={'/dashboard'}>Dashboard</Link>
            </li>

            <li tabIndex={0}>
              <a className='justify-between'>
                Parent
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'>
                  <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                </svg>
              </a>
              <ul className='p-2 menu menu-compact shadow-md ml-4'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          ABIBAs
        </Link>
      </div>
      {/* NAVBAR CENTER */}
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>Item nuevo</a>
          </li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'>
                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
              </svg>
            </a>
            <ul className='p-2'>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      {/* NAVBAR END */}
      <div className='navbar-end gap-1 pr-2'>
        {/* SEARCH */}
        <form className='flex items-center'>
          <input
            type='text'
            placeholder='Search'
            className='w-auto py-1 px-3 outline-none border-2 rounded-lg hidden'
          />
          <button type='submit' className='btn btn-ghost btn-circle '>
            <BiSearch className='text-lg' />
          </button>
        </form>
        {/* CART */}
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='badge badge-sm indicator-item'>8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'>
            <div className='card-body'>
              <span className='font-bold text-lg'>8 Items</span>
              <span className='text-info'>Subtotal: $999</span>
              <div className='card-actions'>
                <button className='btn btn-primary btn-block'>View cart</button>
              </div>
            </div>
          </div>
        </div>
        {/* PROFILE */}
        {userLog === undefined ? (
          <Link to='/login'>Login</Link>
        ) : (
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img src='https://i.pinimg.com/564x/60/f3/0f/60f30f4ed266053d119e4e844be0ec6f.jpg' />
              </div>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <a className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
