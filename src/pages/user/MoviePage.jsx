import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [year, setYear] = useState('');
  const [popular, setPopular] = useState('');
  const [genre, setGenre] = useState('');
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch genres for the dropdown
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/genres');
        setGenres(response.data);
      } catch (error) {
        setError('Error fetching genres');
        console.error('Error fetching genres:', error);
      }
    };
    fetchGenres();
  }, []);

  // Fetch movies based on filters
  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3000/api/movies', {
        params: { year, popular, genre }
      });
      setMovies(response.data);
    } catch (error) {
      setError('Error fetching movies');
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [year, popular, genre]);

  const handleYearChange = (e) => {
    console.log("Year changed:", e.target.value);
    setYear(e.target.value);
  };

  const handlePopularityChange = (e) => {
    console.log("Popularity changed:", e.target.value);
    setPopular(e.target.value);
  };

  const handleGenreChange = (e) => {
    console.log("Genre changed:", e.target.value);
    setGenre(e.target.value);
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`); // Navigate to the moviedetail page
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center p-28 text-blue-800">Movies</h1>

      <div className='mb-4'>
        <div className='flex justify-center flex-wrap gap-4 mb-8'>
          <select value={year} onChange={handleYearChange} className='p-3 border rounded-md shadow-sm text-gray-700'>
            <option value="">Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>

          <select value={popular} onChange={handlePopularityChange} className='p-2 border rounded'>
            <option value="">Popularity</option>
            <option value="80">80+</option>
            <option value="70">70+</option>
            <option value="60">60+</option>
          </select>

          <select value={genre} onChange={handleGenreChange} className='p-3 border rounded-md shadow-sm text-gray-700'>
            <option value="">Genres</option>
            {genres.map((g) => (
              <option key={g._id} value={g.name}>
                {g.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {loading && <p className='text-center'>Loading...</p>}
      {error && <p className='text-center text-red-600'>{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie) => (
          <Link
            key={movie._id}
            to={`/user/movies/${movie._id}`}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={movie.posterImage}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <p className="mt-2 text-gray-600 text-sm">
                {movie.description.substring(0, 100)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
