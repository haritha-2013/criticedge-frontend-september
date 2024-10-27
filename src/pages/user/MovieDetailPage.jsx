import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import ReviewForm from "../../components/user/ReviewForm";
import StarRating from "../../components/user/StarRating";

export const MovieDetailPage = () => {
    const { id } = useParams(); // To get the id from the parametrs
    const [movie, setMovie] = useState(null); // to store the details of the movie
    const [error, setError] = useState(null); // to store any errors
    const [userRating, setUserRating] = useState(null);
    useEffect(() => {
        const fetchMovie = async () => {
            console.log(id);
            try {
                const response = await axios.get(`http://localhost:3000/api/movies/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error('error fetching movie details:', error);
                setError('Error fetching movie details. Please try again later.');
            }
        };
         fetchMovie();
        }, [id]);
  
        const handleRating = async (rating) => {
    try {
        await axios.post(`http://localhost:3000/api/ratings`, {
            movieID: id,
            rating               
        }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        });
        
        
       
    } catch (error) {
       console.error('Error submitting rating:', error);
       alert('Error submitting rating. Please try again later.') ;
    }
   };

    if (error) return <div className="text-red-500">{error}</div>;
    if (!movie) return <div>Loading...</div>;

return (
    <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          
        </div>
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 pt-24">
            <img 
        src={movie.posterImage} 
        alt={movie.title} 
        className="h-64 md:h-80 object-cover rounded mb-4 shadow-lg"
        />
        </div>
        </div>
        <div className="md:w-2/3">
        <h1 className="text-2xl font-bold mb-4 text-white">{movie.title}</h1>
        <p className="text-lg mb-4">{movie.description}</p>
        <p className="text-sm mb-2"><strong>Release Date:</strong> {new Date(movie.releaseDate).toDateString()}</p>
        <p className="text-sm mb-2"><strong>Duration:</strong> {movie.duration} minutes</p>
        <p className="text-sm mb-2"><strong>Language:</strong>{movie.language}</p>  
     </div>

     <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Rate this Movie</h2>
            <StarRating rating={userRating} onRate={handleRating} />
         </div>
       
       <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Leave a Review</h2>
        <ReviewForm />
       </div>
    </div>
);
};

