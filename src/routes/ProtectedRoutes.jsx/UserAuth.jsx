import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const UserAuth = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null means loading
    const navigate = useNavigate();

         const checkUser = async() => {
            try {
               const response = await axios.get('http://localhost:3000/api/users/checkuser',
                { withCredentials: true }
               );
               if (response.data && typeof response.data.success === 'boolean') {
                  setIsAuthenticated(response.data.success);
               } else {
                  console.log('Unexpected response format:', response.data);
                  setIsAuthenticated(false);
               }
            } catch (error) {
               console.error("Authentication check failed:", error);
               setIsAuthenticated(false);
            }
            
    };
    
    useEffect(() => {
    checkUser();
 }, []);

 
 if (isAuthenticated === null) {
    return <div>Loading...</div>;
 }

 if (!isAuthenticated) {
   navigate('/login', { state: { from: window.location.pathname } });
   return null;
 }


return children;
};
