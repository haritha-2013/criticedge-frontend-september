import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { quotes } from '../../utils/quotes';

export const LoginPage = () => {

  const {
    register,
    handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

  const onSubmit = async(data) => {
   try {
    console.log(data,'====data');

  const response = await axios({
    url:'http://localhost:3000/api/users/login',
    method: 'POST',
    data,
    withCredentials: true,
  });
  console.log(response);
toast.success('Login successfully completed !!!');

const redirectPath = location.state?.from || '/';
navigate(redirectPath);
   }catch (error) {
    toast.error('Login failed')
    console.log(error);
  }
};

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const quote = getRandomQuote();

return (
    <div className="hero pt-24">
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-1/2  p-8 '>
        <blockquote className='italic text-lg mt-4  p-4 rounded '>
        "{quote}" 
      </blockquote>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center">
        <div className='card bg-base-100 w-full max-w-sm  p-4'>
    <div className="text-center lg:text-left mb-6 p-24">
      <h1 className="text-xl font-bold">Login now!</h1>
     </div>
    <form onSubmit={handleSubmit(onSubmit)} className='p-6'>
     <div className="form-control">
     <label className="label">
     <span className="label-text">Email</span>
     </label>
     <input type="email" 
     {...register("email")} 
     placeholder="email" 
     className="input input-bordered w-full"
     required 
     />
     </div>
     <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type="password" 
          {...register("password")} 
           placeholder="password" 
           className="input input-bordered" 
           required 
           />
        <label className="label mt-2">
          <Link to={'/signup'}>
            Dont have any account?
          </Link>
        </label>
       </div>
       <div className="form-control mt-6">
          <button 
          className="btn btn-primary" 
          type='submit'
          >
            Login
            </button>
        </div>
        </form>  
            </div>
        </div>
  </div>
</div>
  );
};
