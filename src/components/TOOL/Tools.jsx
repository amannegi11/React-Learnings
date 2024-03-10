import React from 'react'
import Template from '../Common/Template'
const Tools = () => {
    const data = [{ path: "/tools/todo", name: "TodoList",url:"/images/todo.png" },
    { path: "/tools/calculator", name: "Calculator",url:"/images/calculator.jpg" },            
    { path: "/tools/stopwatch", name: "StopWatch",url:"/images/stopWatch.jpg" },
    { path: "/tools/weather", name: "WeatherApp",url:"/images/weather.jpg" }]
    return (
        <Template data={data} Category={"TIME TO GET INTO TOOLS"} about={
            "Introducing the Tools Dashboard – your productivity powerhouse! Stay focused, organized, and efficient with our intuitive tools – your productivity has never looked so good!"}/>
    )
}

export default Tools