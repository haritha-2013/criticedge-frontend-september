import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const PremiumPage = () => {
    const [premiumContents, setPremiumContents] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/users/checkuser', { withCredentials: true });
                if (response.data && typeof response.data.success === 'boolean') {
                    setIsAuthenticated(response.data.success);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Authentication check failed:", error);
                setIsAuthenticated(false);
            }
        };

        checkUser();
    }, []);

    useEffect(() => {
        if(isAuthenticated === null) {
           return;
        } 
        if (!isAuthenticated) {
            navigate('/login');
        }
        else {
            fetchPremiumContents();
        }
    }, [isAuthenticated, navigate]);
    
    const fetchPremiumContents = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/premium' , { withCredentials: true });
            setPremiumContents(response.data);
        } catch (error) {
            console.error('Failed to fetch premium content:', error);
            
        }
    };

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="premium-page">
            <h1 className="p-32">Premium Contents</h1>
            <div className="premium-list">
                {premiumContents.map((content) => (
                    <div key={content.premiumContentID} className="premium-item">
                        <h2>{content.accessLevel}</h2>
                        <p>{content.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

