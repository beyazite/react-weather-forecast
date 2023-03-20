import React from 'react'
import Header from './Header';
import Forecast from './Forecast';
import { useWeatherCont } from '../context/WeatherContext';

function Container() {
  return (
    <div>
        <Header/>
        <Forecast/>
    </div>
  )
}

export default Container