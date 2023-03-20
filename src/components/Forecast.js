import moment from 'moment/moment';
import React from 'react'
import { useWeatherCont } from '../context/WeatherContext'


function Forecast() {
  const {lat,long,data,city,secData,newCity,inputF,z,country} = useWeatherCont();
  
  const iconSrc = `http://openweathermap.org/img/w/`;

  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

  return (
    <div>
      {inputF ?     <h1>{z}-{country}</h1> : <h1>{city}-{country}</h1> }
      <div className='card'>

        
        {
          //  data.map((item,id)=> 
          //       <div className='boxes' key={item.weather.id}>
          //         <img src={iconSrc + item.weather[0].icon + ".png"} />
          //         <p>Temp: {item.main.temp}</p>
          //         <p>Feels: {item.main.feels_like}</p>
          //         <p>Min Temp: {item.main.temp_min}</p>
          //         <p>Humidity: {item.main.humidity}</p>
          //       </div>
                
                
                
          // )
            
         !data ?
          

          
          secData.map((item,id)=>
          <div className='boxes' key={item.weather.id}>
           <h3>{days[id]}</h3>
           <img src={iconSrc + item.weather[0].icon + ".png"} />
           <p> {item.main.temp} &deg;C</p>
           <p>Feels {item.main.feels_like} &deg;C</p>
           <p>Humidity {item.main.humidity}</p>
          </div>
        )

        :
        data.map((item,id)=> 
                <div className='boxes' key={item.weather.id}>
                  <h3>{days[id]}</h3>
                  <img src={iconSrc + item.weather[0].icon + ".png"} />
                  <p> {item.main.temp} &deg;C</p>
                  <p>Feels {item.main.feels_like} &deg;C</p>
                  <p>Humidity {item.main.humidity}</p>
                </div> )
          
        }
         
        {/* {
          secData && 
          secData.map((item,id)=>
          <div className='boxes' key={item.weather.id}>
           <img src={iconSrc + item.weather[0].icon + ".png"} />
           <p>Temp: {item.main.temp}</p>
           <p>Feels: {item.main.feels_like}</p>
           <p>Min Temp: {item.main.temp_min}</p>
           <p>Humidity: {item.main.humidity}</p>
          </div>
        )
        }  */}
        
        
      </div>
      
      {/* {JSON.stringify(data)} */}
    </div>
  )
}

export default Forecast