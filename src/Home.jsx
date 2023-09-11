import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { BsSearch } from "react-icons/bs";
import { PiWindBold } from "react-icons/pi";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import {  TbTemperaturePlus } from "react-icons/tb";
import { BsSpeedometer2 } from "react-icons/bs";
import bgimages from "./assets/Bgimages";
import { iconsimg,iconimg,bgurl,imgsetter } from "./assets/Bgimages";
const Home = () => { 
 async function getData() {
    let api = "42d26a6a37f7db27bcab4557180f9ffc";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setweatherData(data))
    //   .catch((err) => console.log(err));
    // console.log(weatherData);
    let res=await fetch(url)
    let dt=await res.json()
    if(res.status==200){
      console.log(dt)
      setweatherData(dt)
    }else{
    return alert("City Not Found")
    }
  }


  const [city, setcity] = useState("Delhi");
  const [weatherData, setweatherData] = useState({});
  const { coord, dt, name, main, wind, visibility } = weatherData;



  useEffect(() => {
    getData();
  }, []);
  console.log(weatherData);
  setTimeout(()=>{

    imgsetter(weatherData.weather[0].icon)
    console.log(bgurl)
    console.log(iconimg)
  },1000)
function handlekey(e){
  if(e.key==="Enter"){
    alert()
    getData()
  }
}
function handlechange(e){
  setcity(e.target.value)

}

  return (
    <>

      {weatherData.weather && weatherData.weather[0] && (      
        <div>        
          {imgsetter(weatherData.weather[0].icon)}
          <div
            className="home-div"
            style={{
              backgroundImage:`url(${bgurl})`,
            }}
          ></div>

          <div className=" mx-auto flex flex-col items-center text-white gap-3  h-[100vh]">
            <div className="flex  items-center gap-2 justify-center pt-12">
              <input
                value={city}
                onChange={handlechange}
                type="text"
                placeholder="Enter City name"
                className="outline-none text-black border-2 border-indigo-300 rounded-md shadow-lg  focus:border-indigo-700"
              />

              <button
                onClick={() =>{
                  if(city.length<=2){
                    return alert("Enter Aleast 3 Characters")
                  }                  
                  getData()
                } 
                }
                className="text-white shadow-xl text-lg hover:scale-105 duration-100"
                onKeyDown={(e)=>handlekey(e)}
              >
               
                <BsSearch />
              </button>
            </div>
            {/* Details */}
            <div className="md:w-[40%] w-[85%] pb-3 mx-auto flex lg:flex-row flex-col justify-evenly px-3 details">
              {/* image */}
              <div className="text-lg flex py-5  md:py-10  gap-3 mx-auto   px-2 justify-evenly">
                <img
                  src={`${iconimg}`}
                  className="md:w-[120px] w-[80px] object-fit"
                  alt=""
                />
                {/* Text */}
                <div className="mx-auto">
                  <p className="text-sm">
                    {new Date(Number(dt) * 1000).toLocaleTimeString()}
                  </p>
                  <p className="md:text-2xl text-xl">{name}</p>
                  <p className="md:text-3xl text-3xl">
                    {weatherData?.weather[0]?.main}
                  </p>
                </div>
              </div>
              {/* minor details */}
              <div className="flex flex-col justify-evenly flex-2 mx-auto items-center lg:items-left">
                <p className="flex items-center">
                  <CiTempHigh /> Temp {main?.temp}°C
                </p>
                <p className="flex items-center">
                  <TbTemperaturePlus /> Feels Like {main?.feels_like}°C
                </p>
                <span className="flex items-center">
                  <PiWindBold /> {wind?.speed}Kmph
                </span>
                <p className="flex items-center">
                  <WiHumidity /> {main?.humidity}%
                </p>
                <p className="flex items-center">
                  <BsSpeedometer2 /> {main?.pressure}
                </p>
              </div>
            </div>
            {/* hourly forcast */}
            <div></div>
            {/* Daily Forcast */}
            <div></div>
          </div>
        </div>
      )}

      
    </>
  );
};

export default Home;
