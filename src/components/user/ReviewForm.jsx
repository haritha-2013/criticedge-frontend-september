import React, { useState } from "react";
import axios from "axios";

const ReviewForm = () => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const[errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            await axios.post(`http://localhost:3000/api/reviews`, {
                name,
                review,
               });

            setSuccessMessage('Review submitted successfully !');
            setName('');
            setReview('');
            setRating('');

        } catch (error) {
            setErrorMessage('Error submitting review. Please try again later.')
            
        }
         setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                    </label>
                    <input 
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus-border-indigo-500 sm:text-sm"
                    required
                    />
            </div>
            <div>
            <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                Your Review
            </label>
            <textarea 
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows='4'
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md -shadow-sm focus:outline-none focus:ring-indigo-500 sm-text-sm"
            required
           />
           </div>
           <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
           </button>
           {successMessage && <div className="text-green-500">{successMessage}</div>}
           {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        </form>
    );
};

export default ReviewForm;