import moment from 'moment/moment';
import React from 'react'
import { useWeatherCont } from '../context/WeatherContext'


function Forecast() {
  const {data,city,secData,newCity,country} = useWeatherCont();
  
  const iconSrc = `http://openweathermap.org/img/w/`;

  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];


  const currentDay = moment().format("dddd");
  const newDays = [];

  const time = (currentDay) => {
    let a = (days.indexOf(currentDay));
    for(let i=a; i<a+5;i++){
      if(a+5>7){
        let concatted = days.concat(days);
      newDays.push(concatted[i]);
      } 
      else {
      newDays.push(days[i]);
      }
    }
    
    return newDays;
  }
  time(currentDay);


  return (
    <div>
      {newCity ?     <h1>{newCity}-{country}</h1> : <h1>{city}-{country}</h1> }
      <div className='card'>

        
        {
            
         !data ?
          secData.map((item,id)=>
           <div className='boxes' key={item.weather.id}>
             <h3>{newDays[id]}</h3>
             <img src={iconSrc + item.weather[0].icon + ".png"} />
             <p> {item.main.temp} &deg;C</p>
             <p>Feels {item.main.feels_like} &deg;C</p>
             <p>Humidity {item.main.humidity}</p>
           </div>
        )

        :
          data.map((item,id)=> 
            <div className='boxes' key={item.weather.id}>
              <h3>{newDays[id]}</h3>
              <img src={iconSrc + item.weather[0].icon + ".png"} />
              <p> {item.main.temp} &deg;C</p>
              <p>Feels {item.main.feels_like} &deg;C</p>
              <p>Humidity {item.main.humidity}</p>
            </div> )
          
        }
        
        
      </div>
      
    </div>
  )
}

export default Forecast