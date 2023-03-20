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
   const [inputF, setInputF] = useState();
   const [z,setZ] = useState();
   const [country,setCountry] = useState();
   const values = {lat,long,data,city,secData,setNewCity,setData,inputF,setInputF,z,setZ,country};

   // koordinasyonu aldık her lat ve long değiştiğinde, eğer deny edilydiyse locAllow.umuzu false yapıyoruz. 
   // false.sa axios farklı çalışacak.
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
      setCity(resp.data.city.name)})
    },[newCity])
   
    // deny olduğunda bunu çalıştırmaya çalışacağım
    // useEffect(()=>{
    //      axios(`https://api.openweathermap.org/data/2.5/forecast?q=Adana&units=metric&cnt=5&appid=b8d2e66a05ba7e2c2d1f86b9e0c7607a`)
    //   .then((resp) => {setData(resp.data.list)
    //   resp.data.list.map((item)=>setCurrData(item))
    // });
    // },[])

    // console.log("LAT:" , lat, "LONG:", long);
      console.log(lat,long);
     console.log(data);
     console.log(city);
     console.log(newCity);



    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>


};

export const useWeatherCont = () => useContext(WeatherContext);