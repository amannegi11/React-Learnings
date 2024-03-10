import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from './app/cartSlice';
import CustomCall from './CustomCall';
const Rtk = () => {
    const products=CustomCall();
    const dispatch=useDispatch();
   
    const cartItems=useSelector((state)=>state.cart)
    const handleCart=(id)=>{
        if(!cartItems.includes(id)){
            dispatch(addToCart(id))
        }
    }


  return (
    <div className='w-11/12 mx-auto flex justify-center items-center flex-col'>
        <h4 className='text-4xl font-serif text-lime-600 border-4 p-4 text-center mb-8'>Shopping Cart Using ReduxToolKit</h4>
        <div className='flex justify-between w-8/12 mb-16 border-b-8 '>
            <h3 className='text-4xl font-mono text-yellow-500 px-8'>Products</h3>
            <div className='px-8 relative '>
                <Link to={"/explore/rtk/cart"}>
                 { cartItems.length ? <span className='w-8 h-8 text-xl text-center absolute right-8 bottom-8 text-red-100 font-serif font-extrabold bg-red-600 rounded-full'>{cartItems.length }</span> : <span></span>}
                <AiOutlineShoppingCart className='text-6xl '/>
                </Link>
            </div>
        </div>
        <div className=' h-screen w-8/12 flex flex-wrap gap-4 lg:justify-evenly'>
            {
               products && products.map((pro)=>(
                    <div className='text-gray-500 lg:w-[45%] w-[100%] rounded-md flex justify-center items-center flex-col h-[45%] bg-white' key={pro.id}>
                        <div className='text-center w-full'>
                        {pro.category}
                        </div>
                        <img src={pro.image} alt="" className='w-[80%] h-[60%]' />
                        <div className='flex justify-between w-[60%] mt-2'>
                            <div>${pro.price}</div>
                            <div className='flex justify-center items-center gap-1'><span>{pro.rating.rate}</span> <FaStar className='text-yellow-500'/></div>
                        </div>
                        
                        <button className='bg-blue-700 p-2 rounded-md text-white hover:bg-blue-500 mt-4' onClick={()=>handleCart(pro.id)}>AddtoCart</button>
                        
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Rtk