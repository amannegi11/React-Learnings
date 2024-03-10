import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart,removeToCart } from './app/cartSlice'
import CustomCall from './CustomCall'
import { FaFaceSadTear } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import { AiFillDelete } from "react-icons/ai";
const Cart = () => {
    const pros=useSelector((state)=>state.cart)
    const Products=CustomCall();
    const cartProducts=Products.filter((pro)=>pros.includes(pro.id))    


    const dispatch=useDispatch();
    const handleRemove=(id)=>{
        dispatch(removeToCart(id))
    }
    return (
        <div className='w-8/12  h-screen mx-auto'>
            <h4 className='text-2xl font-serif text-center mb-12'>Your Cart!</h4>
            <div className={`${pros.length ? "text-gray-800 bg-purple-100 rounded-md" : "" }`}>
                {
                 cartProducts.length ?  (cartProducts.map((pro,index) => (
                        <div className='flex justify-between p-3' key={pro.id}>
                            <div className='flex gap-2'>
                                <div className='text-xl'>{index+1} ). </div>
                                <img src={pro.image} alt="" className='w-[40px] h-[40px] '/>
                                 
                            </div>
                            
                            <div className='text-xl flex gap-4 justify-center items-center'>
                               <span> ${pro.price}</span>
                               <AiFillDelete className='text-4xl text-red-500' onClick={()=>handleRemove(pro.id)}/> 
                            </div>
                            
                        </div>
                    ))): (<div className='flex justify-center items-center gap-2 text-center '><div className='lg:text-4xl font-mono '>Your cart is <span className='text-red-500 font-semibold'>Empty! </span></div> <FaFaceSadTear className='text-yellow-500 lg:text-6xl'/>  </div> )
                }
            </div>
               
             <div className={`${pros.length ? "visible":"hidden"} border-t-4 text-end pr-2 mt-4 pt-2 text-2xl font-semobold`}>
               Total : $ {
                    cartProducts.reduce((acc,curr)=>acc+curr.price,0)
                }
            </div>
            <div className='flex justify-center items-center mt-11'>
            <Link to={"/explore/rtk"}><button className='bg-blue-600 p-2 rounded-md hover:bg-blue-500'>{pros.length ? "Add More Items":"Add Items"}</button></Link>
            </div>
        </div>
    )
}

export default Cart