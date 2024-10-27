import React,{ useState } from 'react'

export const SearchBar = ({ onSeach }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if(onSeach) {
            onSeach(query);
        }
    };
  return (
    <form onSubmit = {handleSearch}className='flex items-center space-x-2'>
        <input type="text" 
        value={query}
        onChange={handleInputChange}
        placeholder='Search movies, reviews...'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus-blue-500'
        />
        <button 
        type='Submit'
        className='px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
            search
        </button>
        </form>
  );
};
