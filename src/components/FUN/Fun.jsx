import React from 'react'
import Template from '../Common/Template'

const Fun = () => {
    const data = [{ path: "/fun/quiz", name: "QuizGame" , url:"/images/quiz.jpg"}, { path: "/fun/memory", name: "MemoryGame",url:"/images/memory.jpg" },{ path: "/fun/tictactoe", name: "TicTacToeGame" , url:"/images/tictactoe.png"}]
    return (
        <Template data={data} about={"Welcome to the React Games Dashboard – where fun meets innovation! Dive into a world of captivating games, all crafted with React for maximum enjoyment!"} Category={"FUN TIME"}/>
    )
}

export default Fun