import React, { useState } from 'react'
import { Link,useLocation } from 'react-router-dom'

const NavBar = () => {
  const data = [{ name: "Fun", path: "/fun" }, { name: "Tools", path: "/tools" }, { name: "Explore", path: "/explore" }]
  const location=useLocation();
  // console.log(location.pathname.split("/")[1]);
  
  return (
    <div className='w-full h-24 pt-8 text-center text-2xl font-semibold bg-gradient-to-r from-indigo-800 to-purple-600 mb-24 rounded-b-3xl'>
  <header>
    <nav className="flex items-center px-4 md:w-8/12 mx-auto justify-between">
      <Link to="/" className="text-white">
        <img src="/arsenal.jpg" alt="" className='w-[60px]  rounded' />
      </Link>
      <ul className="flex ">
        {data.map((d, index) => (
          <li key={index} className="text-gray-200 mr-6">
            <Link to={d.path} className={`${location.pathname.split("/")[1] === d.name.toLowerCase() ? "text-lime-400  border-b-4 rounded-md pb-2 border-lime-200 ":  "text-white"} hover:text-lime-400`} >{d.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
</div>



  )
}

export default NavBar