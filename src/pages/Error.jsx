import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
const Error = () => {
  return (
    <>
    {/* <NavBar/> */}
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8  rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-gray-50 mb-6">404 - Page Not Found</h2>
        <p className="text-gray-100">Sorry, the page you're looking for doesn't exist.</p>
        <Link to={"/"}>
            <button className='bg-blue-500 p-4 mt-4 rounded-md w-[40%] '>Back to Home</button>
        </Link>
      </div>
    </div>
    </>
    
  )
}

export default Error