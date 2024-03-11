import React from 'react'

import { Link } from 'react-router-dom'
const Template = ({ data ,about,Category}) => {
    return (
        <div className='w-8/12 mx-auto'>
            
            <h3 className='text-center text-4xl font-serif font-bold text-lime-500 mb-4 '>{Category}</h3>
            <div className='w-[90%] md:w-[50%] text-center mx-auto mb-8 font-semibold text-xl text-pink-400'>{about}</div>
            <div className='flex  w-11/12 gap-8 mx-auto justify-center items-center  flex-wrap '>
                
                {
                    data.map((data, index) => (
                        <div key={index} className="bg-gradient-to-br from-purple-100 to-purple-200 shadow-lg rounded-lg p-6 w-80">

                            <div className="text-xl font-semibold text-gray-800 mb-4">{data.name}</div>
                            <img src={data.url} alt="" className='w-[250px] h-[150px] mb-4 rounded-md'/>
                            <Link to={data.path}>
                                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                                    Start
                                </button>
                            </Link>
                        </div>


                    )

                    )
                }
            </div>

        </div>
    )
}

export default Template