import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { UserHeader } from "./user/UserHeader";
import { Outlet } from "react-router-dom";

const backgroundImage = 'https://res.cloudinary.com/decxaepjd/image/upload/v1725373020/deadpool_rvbuis.jpg';

export const AppWrapper = () => {
    return (
        <div 
        className=" relative flex flex-col min-h-screen text-white"
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >
            <Header />
            <main className="flex-grow pt-32 pb-16">
                <Outlet /> 
            </main>
            <Footer />

        </div>
    );
};