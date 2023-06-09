import React from 'react'
import { useWeatherCont } from '../context/WeatherContext'
import moment from 'moment/moment';

function Header() {

  const handleChange = (e) => {
    setNewCity(e.target.value);
    setData()
  }

  const handleClick = (e) => {
    setNewCity(e.currentTarget.value);
    setData()

  }
  

  const {setNewCity,setData} = useWeatherCont();
  return (
    <div>
      <div className='moment-of-truth'>
       {moment().format('MMMM Do YYYY, h:mm:ss a')}
       <div className='btn-container'>
        <input type="button" value="New York" onClick={handleClick} className="city-btn"></input>
        <input type="button" value="London" onClick={handleClick} className="city-btn"></input>
        <input type="button" value="Istanbul" onClick={handleClick} className="city-btn"></input>
        <input type="button" value="Mumbai" onClick={handleClick} className="city-btn"></input>
        <input type="button" value="Tokyo" onClick={handleClick} className="city-btn"></input>
        <input type="button" value="Canberra" onClick={handleClick} className="city-btn"></input>
       </div>
      </div>
      <br/>
      <input type="input" onChange={handleChange } className="dontQuestionMe" placeholder='Search a city'></input>

      
    </div>
  )
}

export default Header