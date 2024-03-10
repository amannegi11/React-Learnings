import React, { useState } from 'react'
import NavBar from '../../../pages/NavBar';
const Todos = () => {
    const [text,setText]=useState("");
    const [todos,setTodos]=useState([]);

    function addHandler(){
        if(text.trim()){
            setTodos([...todos,text]);
            setText("")
        }
    }

    function deleteHandler(ind){
        let newTodo=todos.filter((todo,index)=>index!==ind);
        setTodos(newTodo)
    }
  return (
    <>
      
   
    <div className='flex flex-col mt-24 items-center  w-full h-screen '>
    <div className="mb-4 w-[70%]  ">
        <input 
            type="text" 
            placeholder='Type your todo...' 
            onChange={(e)=>setText(e.target.value)} 
            className='w-[75%]  text-gray-800 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            value={text}
        />
        <button 
            onClick={addHandler} 
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2 w-[20%]"
        >
            Add
        </button>
    </div>
    <div className="flex flex-col items-center w-[70%] pr-6">
        {todos.length ? 
            todos.map((todo,index)=>(
                <div key={index} className="flex gap-5 bg-gray-50 rounded-md px-4 py-2 mb-2  w-[98%]   justify-between items-center">
                    <span className="text-gray-800">{todo}</span>
                    <button onClick={()=>deleteHandler(index)} className="text-gray-200 text-xl bg-slate-500 px-2 rounded-md hover:text-red-800">Delete</button>
                </div>
            ))
            :
            <div className="text-gray-100 text-2xl mt-4">
                Add your first Todo
            </div>
        }
    </div>
    
</div>
</>
  )
}

export default Todos