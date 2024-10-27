import React from "react";

const quotes = [
    "Keep track of every film you've ever watched(or just start from the day you join)",
    "Show some love for your favourite films, lists and review with a 'Like'",
    "Write and share reviews, and follow friends and other memebers to read theirs",
    "Rate each film on a five-star scale (with halves) to record and share your reaction",
    "Keep a diary of your film watching (and upgrade to PRO for comprehensive stats",
    "Compile and share lists of films on any topic and keep a watchlist of films to see"
]

export const QuoteBoxes = () => {
    return (
      <div className='p-4 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4'>
        {quotes.map((quote, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg text-center text-white hover:bg-gradient-to-r 
              from-yellow-400 to-red-400 transition-transform transform hover:scale-105
              ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}`}
          >
            <p className='text-lg font-semibold'>
              “{quote}”
            </p>
          </div>
        ))}
      </div>
    );
  };