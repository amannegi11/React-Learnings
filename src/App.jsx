import React from 'react'
import HomePage from './pages/HomePage'
import Error from './pages/Error'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Tools from './components/TOOL/Tools'
import StopWatch from './components/TOOL/StopWatch/StopWatch'
import Todos from './components/TOOL/TODO/Todos'
import Calculator from './components/TOOL/Calculator/Calculator'
import Weather from './components/TOOL/WeatherApp/Weather'

import Quiz from './components/FUN/Quiz/Quiz'
import Fun from './components/FUN/Fun'
import MemoryGame from './components/FUN/Memory/MemoryGame'
import Tictactoe from './components/FUN/TicTacToe/Tictactoe'
import Explore from './components/EXPLORE/Explore'
import Carousel from './components/EXPLORE/Carousel/Carousel'
import NavBar from './pages/NavBar'
import Rtk from './components/EXPLORE/RTK/Rtk'
import Cart from './components/EXPLORE/RTK/Cart'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/tools' element={<Tools/>}/>
        <Route path='/tools/todo' element={<Todos/>}/>
        <Route path='/tools/stopwatch' element={<StopWatch/>}/>
        <Route path='/tools/calculator' element={<Calculator/>} />
        <Route path='/tools/weather' element={<Weather/>}/>

        <Route path='/fun' element={<Fun/>}/>
        <Route path='/fun/quiz' element={<Quiz/>}/>
        <Route path='/fun/tictactoe' element={<Tictactoe/>}/>
        <Route path='/fun/memory' element={<MemoryGame/>} />

        <Route path='/explore' element={<Explore/>} />
        <Route path='/explore/carousel' element={<Carousel/>}/>
        <Route path='/explore/rtk' element={<Rtk/>}/>
        <Route path='/explore/rtk/cart' element={<Cart/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
      
  
  )
}

export default App