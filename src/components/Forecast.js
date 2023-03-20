import React from 'react'
import { useWeatherCont } from '../context/WeatherContext'

function Forecast() {
  const {lat,long,data,city,secData,newCity,inputF,z} = useWeatherCont();
  
  const iconSrc = `http://openweathermap.org/img/w/`;

  let selectedCity = "";

  return (
    <div>Weekly Forecast Results
      <br/><br/>
      {inputF  ?     <h1>{z}</h1> : <h1>{city}</h1> }
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
           <img src={iconSrc + item.weather[0].icon + ".png"} />
           <p>Temp: {item.main.temp}</p>
           <p>Feels: {item.main.feels_like}</p>
           <p>Min Temp: {item.main.temp_min}</p>
           <p>Humidity: {item.main.humidity}</p>
          </div>
        )

        :
        data.map((item,id)=> 
                <div className='boxes' key={item.weather.id}>
                  <img src={iconSrc + item.weather[0].icon + ".png"} />
                  <p>Temp: {item.main.temp}</p>
                  <p>Feels: {item.main.feels_like}</p>
                  <p>Min Temp: {item.main.temp_min}</p>
                  <p>Humidity: {item.main.humidity}</p>
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