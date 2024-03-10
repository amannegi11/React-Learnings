import React, { useState } from 'react'
import axios from 'axios'
import NavBar from '../../../pages/NavBar'
const Weather = () => {
    const [city, setCity] = useState("")
    const [error, setError] = useState("")
    const [weatherData, setWeatherData] = useState(null)
  

    async function handlerWeather() {
        console.log(city);
        try {
            let data = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f98107120590c309309032c029200bbc`)
            setError(null)
            setWeatherData(data.data)

        } catch (err) {
            setWeatherData(null)
            setError("Please enter valid city name")
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (city.trim()) {
            await handlerWeather()
        } else {

            setError("Please Enter city name")
        }
    }

    return (
        <>
        
        
  
       <div className="min-h-screen h-full bg-gray-900 flex flex-col items-center justify-start">
       
            <div className="bg-gray-700 p-6 rounded-md shadow-md max-w-md w-11/12 mx-auto">
                <h1 className="text-4xl font-semibold mb-6 text-gray-100 ">Weather App</h1>
                <form onSubmit={handleSubmit} className="w-full mb-6">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city name"
                        className="w-full px-4 py-2 border border-gray-300 text-gray-800 rounded-md mr-2 focus:outline-none"
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600 focus:outline-none">Get Weather</button>
                </form>
                {error && <p className="text-red-500 mb-6 text-center text-lg font-semibold font-mono">{error}</p>}
                {weatherData && (
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-semibold mb-4">{weatherData.name}, {weatherData.sys.country}</h2>
                        <div className="flex items-center">
                            <img src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather Icon" className="w-12 h-12 mr-4" />
                            <p className="text-3xl">{weatherData.main.temp} °C</p>
                        </div>
                        <p className="mt-4 text-xl">{weatherData.weather[0].description}</p>
                    </div>
                )}
            </div>
        </div>


        </>
    )
}

export default Weather