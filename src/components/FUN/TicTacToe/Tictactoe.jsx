import React, { useState } from 'react'

const Tictactoe = () => {
  const [boxes,setBoxes]=useState(Array(9).fill(null))
  const [currentPlayer,setCurrentPlayer]=useState("X");
  const [wBox,setWbox]=useState(Array(3).fill(null))
  const [winner,setWinner]=useState(false)
  const winningPossibility=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

  const restart=()=>{
    setCurrentPlayer("X");
    setBoxes(Array(9).fill(null));
    setWbox(Array(3).fill(null));
    setWinner(false)
  }
  const checkWinner=()=>{
    for(let i=0;i<winningPossibility.length;i++){
      let [a,b,c]=winningPossibility[i];
      if(boxes[a] && boxes[b] && boxes[c] && boxes[a]===boxes[b] && boxes[c]===boxes[a]){
        setWbox([a,b,c])
        setWinner(true)
      }
    }
  }
  const handleClick=(index)=>{
    if(!boxes[index]){
      boxes[index]=currentPlayer
    }
    checkWinner();
    currentPlayer==="X" ? setCurrentPlayer("O") : setCurrentPlayer("X")
  }
  return (
    <div className="flex flex-col items-center justify-start h-screen w-10/12 mx-auto">
      <h1 className="text-4xl font-bold mb-8">Tic Tac Toe</h1>
      {
        winner ? 
        <h3 className='mb-4 text-2xl font-serif text-lime-400'>Winner is Player : <span className='text-yellow-500 font-extrabold text-4xl'>"{boxes[wBox[0]]}"</span></h3> : 
        <div>{boxes.includes(null)? <div className='mb-4 text-2xl font-serif text-lime-400'>Player {currentPlayer} turn</div> : <div className='mb-4 text-2xl font-serif text-lime-400'>Game Tied!</div>} </div>
      }
      <div className="grid grid-cols-3">
      
        {
          boxes.map((box,index)=>(
            <button key={index} value={box} className={`${wBox.includes(index) ? "bg-green-400": "bg-gray-200" } h-32 w-32  border-blue-800 text-4xl font-bold flex items-center justify-center border-8  rounded-md  text-gray-800`} 
            disabled={winner}
            onClick={()=>handleClick(index)}>{box}</button>
          ))
        }
        
      </div>
      {
        (winner || !boxes.includes(null)) && <button className='p-2 bg-slate-200 text-blue-800 mt-12 rounded-md hover:bg-slate-400 hover:text-gray-100 font-extrabold' onClick={restart}>New Game!</button>
      }
    </div>
  )
}

export default Tictactoe