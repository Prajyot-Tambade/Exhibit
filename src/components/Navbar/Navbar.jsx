import React from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { MdOutlineExplore } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';

const Navbar = () => {
  return (
    <header className='border-b border-b-slate-50'>
      <Container>
        <nav className='flex py-4 justify-between'>
          <div className='flex gap-4 items-center'>
            <Link to='/'>
              <img className='h-6' src='./brand-name-logo.svg' alt='Exhibit' />
            </Link>
            <Link className='flex items-center gap-1' to='/explore'>
              <MdOutlineExplore />
              Explore
            </Link>
          </div>

          <div className='flex gap-4'>
            <div className='relative'>
              <IoSearch className='absolute text-white top-1/2 translate-y-[-50%] left-4' />
              <input
                type='text'
                className='bg-transparent border-2 w-full px-12 py-2 rounded-lg focus:outline-none hover:cursor-pointer'
                name=''
              />
            </div>

            <Link className='align-middle' to='/login'>
              Login
            </Link>
            <Link
              className='flex items-center bg-white text-black px-4 py-1 rounded-md'
              to='/login'
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
