import React from 'react'
import { useWeatherCont } from '../context/WeatherContext'

function Header() {

  const handleChange = (e) => {
    setNewCity(e.target.value);
    setInputF(z);
    setData()
  }
  

  const {setSecData,secData,newCity,setNewCity,setData,setInputF,city,z} = useWeatherCont();
  return (
    <div>Cities, Current Date and Time, Location
      <input type="input" onChange={handleChange }></input>
    </div>
  )
}

export default Header