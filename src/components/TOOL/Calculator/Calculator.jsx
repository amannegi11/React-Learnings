import React, { useState } from 'react'

const Calculator = () => {
  const [input,setInput]=useState(""); 
  
  const handleButton=(val)=>{
    setInput((prev)=>prev+val)
  }

  const handleCalculate=()=>{
    setInput(eval(input).toString())
  }

  const clearInput=()=>{
    setInput("")
  }
  return (
    <>

    <div className="flex flex-col items-center justify-center mt-8">
    <h3 className='text-2xl font-semibold m-4'>Calculator</h3>
      <div className="bg-gray-800 border border-spacing-2 p-4 rounded-lg mb-4">
        <input type="text" 
        value={input}
        className="w-full p-2 mb-2 text-gray-200 font-semibold" placeholder="0" disabled />
        <div className="grid grid-cols-4 gap-2">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={()=>handleButton('1')}>1</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={()=>handleButton('2')}>2</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={()=>handleButton('3')}>3</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={()=>handleButton('+')}>+</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={()=>handleButton('4')}>4</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={()=>handleButton('5')}>5</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={()=>handleButton('6')}>6</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={()=>handleButton('-')}>-</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={()=>handleButton('7')}>7</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={()=>handleButton('8')}>8</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={()=>handleButton('9')}>9</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={()=>handleButton('*')}>*</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={()=>handleButton('0')}>0</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={()=>handleButton('.')}>.</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md" onClick={()=>handleButton('/')}>/</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md col-span-2" onClick={handleCalculate}>=</button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md" onClick={clearInput}>Clear</button>  
        </div>
      </div>
    </div>
    </>
  )
}

export default Calculator