import React from 'react'
import { Link } from 'react-router-dom';


export const SignupPage = () => {
  return (
    <div className="hero bg-base-200 py-20">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign up now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to={'/login'}>
            Existing user?
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up </button>
        </div>
      </form>
    </div>
  </div>
  
      </div>

  );
};
