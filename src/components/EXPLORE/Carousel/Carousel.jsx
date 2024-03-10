import React, { useEffect, useState } from 'react'
import { GiFastBackwardButton, GiFastForwardButton } from "react-icons/gi";
const Carousel = () => {
  const data = ['/coursel/basket.webp', '/coursel/cricket.jpg', '/coursel/cycle.jpg', '/coursel/football.jpg', '/coursel/run.jpg', '/coursel/tennis.jpg']
  const [curr, setCurrent] = useState(0)
  useEffect(() => {
    let timer = setTimeout(() => {
      postHandler();
    }, 3000)

    return () => clearTimeout(timer);
  }, [curr])

  function preHandler() {
    curr ? setCurrent(curr - 1) : setCurrent(data.length - 1)
  }

  function postHandler() {
    setCurrent((curr + 1) % data.length)
  }
  return (
    <div className='flex flex-col justify-center items-center gap-4 md:flex-row md:justify-center md:items-center'>
      <button onClick={preHandler} className='mb-4 md:mb-0'>
        <GiFastBackwardButton className='text-8xl hover:text-yellow-400' />
      </button>
      <div className='flex justify-center items-center'>
        {
          data.map((d, index) => (
            <li key={index} className={`${data[curr] === d ? "visible" : "hidden"}`}>
              <img src={d} alt="" className='w-full max-w-xs md:max-w-full md:w-[550px] h-auto md:h-[300px]' />
            </li>
          ))
        }
      </div>
      <button onClick={postHandler} className='mt-4 md:mt-0'>
        <GiFastForwardButton className='text-8xl hover:text-yellow-400' />
      </button>
    </div>

  )
}

export default Carousel