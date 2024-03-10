import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const HomePage = () => {
    return (
        <>
              
            <div className='mx-auto mt-8  w-11/12 flex flex-col justify-center items-center h-full'>

                <h2 className='lg:text-6xl text-4xl  font-mono mb-8 text-center' >Welcome to ReactArsenal!</h2>
                <div className="lg:w-[70%] text-center text-2xl font-serif ">Explore a universe of projects, all at your fingertips.
                    <span className='text-yellow-500 font-semibold'> React-Arsenal</span> is your gateway to a diverse array of
                    small-scale projects, conveniently organized and accessible
                    from one central hub.</div>

                <div className='flex flex-wrap gap-8 w-full h-full justify-center mt-24 mb-10'>
                    <Link to={"/fun"}>
                        <div className='w-[250px] h-[250px] bg-gray-600 rounded-md hover:bg-slate-50 hover:text-gray-800 text-center pt-3'>
                            <div className='text-2xl px-2 font-bold'>FUN</div>
                            <span>Joyful Games and Creativity</span>
                            <img src="/games.jpg" alt=""  className='w-full h-36 mt-4' />
                        </div>
                    </Link >
                    <Link to={"/tools"}>
                        <div className='w-[250px] h-[250px] bg-gray-600 rounded-md hover:bg-slate-50 hover:text-gray-800 text-center pt-3'>
                            <div className='text-2xl px-2 font-bold'>Tools</div>
                            <span>Innovative Instruments</span>
                            <img src="/tools.jpg" alt=""  className='w-full h-36 mt-4'/>
                        </div>
                    </Link>
                    <Link to={"/explore"}>
                        <div className='w-[250px] h-[250px] bg-gray-600 rounded-md hover:bg-slate-50 hover:text-gray-800 text-center pt-3'>
                            <div className='text-2xl px-2 font-bold'>Explore</div>
                            <span>Explore React concepts </span>
                            <img src="/react.jpg" alt="" className='w-full h-36 mt-4' />
                        </div>
                    </Link>
                    
                </div>
            </div>
            
        </>
    )
}

export default HomePage