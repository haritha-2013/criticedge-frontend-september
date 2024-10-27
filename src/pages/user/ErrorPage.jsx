import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className='mon-h-screen w-full'>
        <h1>404 Page not found</h1>
        <Link to={'/'}>HomePage</Link>
    </div>
  )
}
