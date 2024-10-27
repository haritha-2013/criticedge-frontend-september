import React, { useState } from 'react';

const StarRating = ({ rating = 0, onRate }) => {
    const [hoverRating, setHoverRating] = useState(0);
    const [selectedRating, setSelectedRating] = useState(rating);

    const handleMouseEnter = (value) => setHoverRating(value);
    const handleMouseLeave = () => setHoverRating(0);
    const handleClick = (value) => {
        setSelectedRating(value);
        onRate(value); // Call the onRate function to handle the rating submission
    };

    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((value) => (
                <svg
                    key={value}
                    onMouseEnter={() => handleMouseEnter(value)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(value)}
                    className={`w-8 h-8 cursor-pointer ${value <= (hoverRating || selectedRating) ? 'text-yellow-400' : 'text-gray-400'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2L15 8.5L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8.5L12 2Z"/>
                </svg>
            ))}
        </div>
    );
};

export default StarRating;
