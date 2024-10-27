import React from 'react';
import {Link} from 'react-router-dom';
import { DarkMode } from './ui/DarkMode';



export const Header = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-32 px-20 flex items-center justify-between shadow-xl bg-transparent'>
        <h1 className="text-4xl font-bold text-blue-500 dark:text-white">CRITIC EDGE </h1>

        <nav className='flex gap-12 font-semibold text-blue-500 dark:text-white'>
    <Link to={'/'} >Home</Link>
    <Link to={'/login'}>Sign In</Link>
    <Link to={'/signup'}>Create Account</Link>
    <Link to={'/movies'}>Films</Link>
  </nav>
        
        <div className='flex items-center gap-8'>
        <DarkMode />
        <Link to={'/user/premium'}>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Premium</button>
        </Link>
        
        </div>

    </div>
  );
};

