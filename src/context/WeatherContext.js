import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {


   const [lat, setLat] = useState();
   const [long, setLong] = useState();
   const [data, setData] = useState();
   const [city,setCity] = useState();
   const [secData, setSecData] = useState([]);
   const [newCity,setNewCity] = useState("");
   const [country,setCountry] = useState();
   const values = {data,city,secData,setNewCity,setData,country};


    useEffect(()=>{
      
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      
      
      axios(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&cnt=5&appid=b8d2e66a05ba7e2c2d1f86b9e0c7607a`)
      .then((resp) => {
        setData(resp.data.list)
        setCountry(resp.data.city.country)
        setCity(resp.data.city.name)
    })
    },[lat,long]);
    


    useEffect(()=>{
      axios(`https://api.openweathermap.org/data/2.5/forecast?q=${newCity}&units=metric&cnt=5&appid=b8d2e66a05ba7e2c2d1f86b9e0c7607a`)
      .then((resp) => {setSecData(resp.data.list)
      setCountry(resp.data.city.country)
      setCity(resp.data.city.name)
    })
    },[newCity])
   



    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>


};

export const useWeatherCont = () => useContext(WeatherContext);