import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../../../pages/NavBar';
const StopWatch = () => {
    const [isRunning,setIsRunning]=useState(false);
    const [minutes,setMinutes]=useState(0);
    const [seconds,setSeconds]=useState(0);

    const restartHandler=()=>{
        setIsRunning(false)
        setMinutes(0)
        setSeconds(0)
    }
    const stopHandler=()=>{
        setIsRunning(false);
    }
    const startHandler=()=>{
        setIsRunning(true)
    }

    useEffect(()=>{
        let timer;
        if(isRunning){
            timer=setInterval(()=>{
                setSeconds((prev)=>{
                    if(prev===59){
                        setMinutes((prev)=>prev+1);
                        return 0
                    }else{
                        return prev+1
                    }
                })
            },1000)
        }
        return ()=>clearInterval(timer)
    },[isRunning])
  return (
    <>
    
<div className='bg-yellow-500 w-[350px] h-[350px] mx-auto mt-10 text-center flex flex-col justify-center items-center rounded-full'>
    <span className='text-2xl text-gray-50 font-semibold'>STOPWATCH</span>
    <div className="clock flex items-center mt-12">
        <span className="text-6xl font-bold" id="minutes">{minutes < 10 ? "0" + minutes : minutes}</span>
        <span className="text-6xl font-bold mx-2">:</span>
        <span className="text-6xl font-bold" id="seconds">{seconds < 10 ? "0" + seconds : seconds}</span>
    </div>
    <div className='flex gap-4 mt-8'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={startHandler}>Start</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={stopHandler}>Stop</button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={restartHandler}>Restart</button>
    </div>
    
</div>
    </>

  )
}

export default StopWatch