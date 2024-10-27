import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { QuoteBoxes } from '../../components/QuoteBoxes';

export const HomePage = () => {
  const navigate = useNavigate();
  const backgroundImage = 'https://res.cloudinary.com/decxaepjd/image/upload/v1725373020/deadpool_rvbuis.jpg';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/movies`);
        console.log('Fetched movies:', response.data);
        const randomMovies = response.data.sort(() => 0.5 - Math.random()).slice(0, 4); // Select random 4 movies
        setMovies(randomMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  const handleButtonClick = () => {
    navigate('/signup');
  };

  return (
    <div className='flex flex-col flex-grow'>
      <div
      className='flex flex-col items-center justify-centerflex-grow w-full h-full text-white text-center '
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '14rem'
     }}
    >
      <div className='flex items-center justify-center w-full h-full'>
        <div className='text-center'>
          <h1 className='font-sans text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400'>
            Track films you've watched,
          </h1>
          <h1 className='text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-green-400'>
            Save those you want to see...
          </h1>
          <h1 className='text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400'>
            Tell your friends what's good...
          </h1>
          <button className="btn btn-outline btn-success" onClick={handleButtonClick}>
          Get started - It's free !!

          </button>
        </div>
      </div>

      <div className=' p-4  bg-opacity-60 mt-16'>
        <h2 className='text-2xl font-bold mb-4 text-red-600'>Featured Movies</h2>
        <p className='text-lg font-bold mb-4 text-red-400'>
          Check out these top picks!
          Find your next favorite movie from our curated selection.
          
</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {movies.map((movie) => (
            <Link to={`user/movies/${movie._id}`} key={movie._id} className=' text-white'>
            <div className='relative  h-64'>
            <img
              src={movie.posterImage}
              alt={movie.title}
              className='absolute inset-0 w-full h-full object-cover rounded'
            />
           </div>
          </Link>
          ))}
          </div>
      </div>
     <QuoteBoxes />
    </div>
    </div>
  );
};
