import React from 'react';
import {Link} from 'react-router-dom';
import { CircleUserRound, Heart } from 'lucide-react';
import { DarkMode } from '../ui/DarkMode';
import { SearchBar } from '../SearchBar';

export const UserHeader =  ({ onSearch }) => {
  return (
    <div className='absolute top-0 left-0 w-full h-32 px-20 flex items-center justify-between shadow-xl bg-transparent'>
    <div className='flext items-center gap-8 w-3/4 pr-8'>
    <h1 className="text-4xl font-bold text-blue-500 dark:text-white">CRITIC EDGE </h1>
 <nav className='flex gap-8 font-semibold'>
    <Link to={'/'}>Home</Link>
    <Link to={'/movies'}>Films</Link>
    <Link to={'/reviews'}>My reviews</Link>
    </nav>
    </div>

    <div className='w-4'></div>
    <div className='flex-grow'>
    <SearchBar onSearch={onSearch}/>
    </div>


    <div className='w-4'></div>

    <div className='flex items-center gap-8 w-1/4 justify-end'>
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Premium</button>
    <DarkMode />
    <CircleUserRound />
    </div>
  </div>
 );
};