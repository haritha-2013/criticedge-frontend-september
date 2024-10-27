import React, { useEffect, useState } from "react";
import axios from "axios";
import Stars from 'react-stars';


const RatingForm = ({ movieID }) => {
    const [userRating, setUserRating] = useState(null); // Rating of user
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            setIsAuthenticated(true);
        }
        }, []);
      

    // Rating submission
    const handleRatingSubmit = async (newRating) => {
        try {
            const token = localStorage.getItem("authToken");
            if (!token) {
                return alert("You need to be logged in to rate the movie.!!");
            }

            const userID = localStorage.getItem("userID");
            if(!userID) {
                 return alert("User ID is missing.");
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            await axios.post(
                `http://localhost:3000/api/ratings`,
                { movieID, rating: newRating }, // Submit the movieID and the new rating
                config
            );

            setUserRating(newRating); // Update the user's rating after submission
            alert("Rating submitted successfully!");
             } catch (error) {
                console.error("Error submitting rating:", error);
                alert("Failed to submit rating. Please try again later.");
        }
    };

    return (
        <div className="mt-8">
           <h2 className="text-2xl font-bold mb-4 text-white">Rate this movie</h2>
            {isAuthenticated ? (
                <div className="flex items-center">
                    <Stars
                        value={userRating || 0} // Display user's rating or 0 if not rated
                        count={5}
                        onChange={handleRatingSubmit} 
                        size={30}
                        color2={'#ffd700'} // color for filled stars
                        color1={'#e0e0e0'} // color for empty stars
                    />
                    {userRating && (
                        <p className="text-sm text-white ml-4">Your rating: {userRating} stars</p>
                    )}
                </div>
            ) : (
                <p className="text-white">Please log in to rate the movie.</p>
            )}
        </div>
    );
};

export default RatingForm;
