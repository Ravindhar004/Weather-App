const userlocation = document.getElementById("userlocation")
 converter = document.getElementById("converter")
 weathericon = document.querySelector(".weathericon")
 temperature = document.querySelector(".temperature")
 feelslike = document.querySelector(".feelslike")
 description = document.querySelector(".description")
 date = document.querySelector(".date")
 city = document.querySelector(".city")
 hvalue = document.getElementById("hvalue")
 wvalue = document.getElementById("wvalue")
 srvalue = document.getElementById("srvalue")
 ssvalue = document.getElementById("ssvalue")
 cvalue = document.getElementById("cvalue")
 uvvalue = document.getElementById("uvvalue")
 pvalue = document.getElementById("pvalue")
 forecast = document.querySelector(".forecast")
const WEATHER_API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?appid=2a4e356a729fe17aa3d0e3770cad918e&q=`;
const WEATHER_DATA_ENDPOINT = `http://api.openweathermap.org/data/2.5/onecall?units=metric&exclude=minutely&appid=2a4e356a729fe17aa3d0e3770cad918e`;

function finduserlocation(){
    fetch(WEATHER_API_ENDPOINT + userlocation.value)
    .then((response) => response.json())
    .then((data)=>{
        if(data.cod != '' && data.cod != 200){
            alert(data.message);
            return;
        }
        console.log(data);
        city.innerHTML=data.name+","+data.sys.country
        weathericon.style.background=`url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`
        fetch(`${WEATHER_DATA_ENDPOINT}&lon=${data.coord.lon}&lat=${data.coord.lat}`)

        .then((response) => response.json())
        .then((data)=>{
            console.log(data);

            temperature.innerHTML = data.current.temp;
            feelslike.innerHTML ="feels like" +data.current.feels_like
        });
        
    });
}