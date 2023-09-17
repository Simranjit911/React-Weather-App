const bgimages={
    clouds:[
      "https://cdn.pixabay.com/photo/2016/11/29/13/12/cloudy-1869753_640.jpg",
      "https://cdn.pixabay.com/photo/2017/04/25/06/15/father-and-son-2258681_640.jpg",
      "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg",
          "https://cdn.pixabay.com/photo/2017/12/09/21/33/sunset-3008779_640.jpg"
    ],
    few:[
      "https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/22/15/16/lightning-1056419_640.jpg",
      "https://cdn.pixabay.com/photo/2016/12/27/21/03/lone-tree-1934897_640.jpg",
          "https://cdn.pixabay.com/photo/2018/10/01/20/38/rocky-mountains-3717220_640.jpg"
    ],
    scattered:[
      "https://cdn.pixabay.com/photo/2018/01/23/23/34/nature-3102762_640.jpg",
      "https://cdn.pixabay.com/photo/2014/09/10/00/59/mountains-440520_640.jpg",
      "https://cdn.pixabay.com/photo/2017/02/19/15/28/sunset-2080072_640.jpg",
          "https://cdn.pixabay.com/photo/2015/08/30/11/16/sunset-914148_640.jpg"
    ],
    broken:[
      "https://cdn.pixabay.com/photo/2017/02/26/16/51/cyclone-2100663_640.jpg",
      "https://cdn.pixabay.com/photo/2019/03/16/20/31/shipwreck-4059640_640.jpg",
      "https://media.istockphoto.com/id/1028827352/photo/sky.webp?b=1&s=612x612&w=0&k=20&c=ELMxphq89_GyKemlVmY-bue8FlKh7uAcSe0dltUTH1k=",
          "https://cdn.pixabay.com/photo/2014/08/09/15/45/sky-414199_640.jpg"
    ],
    showerrain:[
      "https://media.istockphoto.com/id/1461681027/photo/rain-over-the-green-forest-carpathian-foggy-mountain-hills-rainy-day-in-summer.webp?b=1&s=612x612&w=0&k=20&c=iIdllsfGEPrXV6LfZwGitnql4gMH15FuHfIFj3wZQCs=",
      "https://cdn.pixabay.com/photo/2018/01/17/09/12/sunset-3087790_640.jpg",
      "https://cdn.pixabay.com/photo/2017/12/18/09/54/lago-di-limides-3025780_640.jpg",
          "https://cdn.pixabay.com/photo/2017/01/06/23/04/nature-1959229_640.jpg"
    ],
    clear:[
      "https://cdn.pixabay.com/photo/2017/06/08/06/03/british-columbia-2382640_640.jpg",
      "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_640.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_640.jpg",
          "https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_640.jpg"
    ],
    rain:[
      "https://cdn.pixabay.com/photo/2015/11/22/15/16/lightning-1056419_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/20/17/29/parachute-1843350_640.jpg",
      "https://cdn.pixabay.com/photo/2017/12/18/09/54/lago-di-limides-3025780_640.jpg",
          "https://cdn.pixabay.com/photo/2017/01/06/23/04/nature-1959229_640.jpg"
    ],
    thunderstorm:[
      "https://cdn.pixabay.com/photo/2017/08/01/22/38/flash-2568381_640.jpg",
      "https://cdn.pixabay.com/photo/2016/06/13/22/12/flash-1455285_640.jpg",
      "https://cdn.pixabay.com/photo/2018/05/20/22/55/thunderstorm-3417042_640.jpg",
          "https://cdn.pixabay.com/photo/2020/10/24/06/42/thunderstorm-5680651_640.jpg"
    ],
    snow:[
      "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/20/17/29/parachute-1843350_640.jpg",
      "https://cdn.pixabay.com/photo/2017/12/18/09/54/lago-di-limides-3025780_640.jpg",
          "https://cdn.pixabay.com/photo/2017/01/06/23/04/nature-1959229_640.jpg"
    ]
   

  }


export const iconsimg={
    "clear sky":"http://openweathermap.org/img/wn/01d@2x.png",
    "few clouds":"http://openweathermap.org/img/wn/02d@2x.png",
    "scatered":"http://openweathermap.org/img/wn/03d@2x.png",
    "broken":"http://openweathermap.org/img/wn/04d@2x.png",
    "shower":"http://openweathermap.org/img/wn/09d@2x.png",
    "rain":"http://openweathermap.org/img/wn/10d@2x.png",
    "thunderstorm":"http://openweathermap.org/img/wn/11d@2x.png",
    "snow":"http://openweathermap.org/img/wn/13d@2x.png",
    "mist":"http://openweathermap.org/img/wn/50d@2x.png",
  
}
let iconimg="http://openweathermap.org/img/wn/01d@2x.png"
let bgurl=""
export function imgsetter(name){
  const randomIndex = Math.floor(Math.random() * 3);

  console.log(name)
  console.log(randomIndex)
if(name==="01n"){
  iconimg=iconsimg["clear sky"]
  bgurl=bgimages.clear[randomIndex]
}
if(name==="02n"){
  iconimg=iconsimg["few clouds"]
  bgurl=bgimages.few[randomIndex]
}
if(name==="03n"){
  iconimg=iconsimg["scatered"]
  bgurl=bgimages.scattered[randomIndex]
}
if(name==="04n"){
  iconimg=iconsimg["broken"]
  bgurl=bgimages.broken[randomIndex]
}
if(name==="09n"){
  iconimg=iconsimg["shower"]
  bgurl=bgimages.showerrain[randomIndex]
}
if(name==="10n"){
  iconimg=iconsimg["rain"]
  bgurl=bgimages.rain[randomIndex]
}
if(name==="11n"){
  iconimg=iconsimg["thunderstorm"]
  bgurl=bgimages.thunderstorm[randomIndex]
}
if(name==="13n"){
  iconimg=iconsimg["snow"]
  bgurl=bgimages.snow[randomIndex]
}
if(name==="50n"){
  iconimg=iconsimg["mist"]
  bgurl=bgimages.clear[randomIndex]
}
  
  }

export {bgurl,iconimg}
export default bgimages