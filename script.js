const apikey ="4c5adc6b4c7c9a2669d8aca348110b1e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{

        var data = await response.json();

    
  
        document.querySelector(".weather-status").innerHTML = data.weather[0].main;
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed+ " km/hr";
    
        if (data.weather[0].main == "Clouds"){
    
            weatherIcon.src = "Images/clouds.png"
            document.querySelector(".box").style.background = "linear-gradient(to bottom, #b7d8f2, #67a0d9)";
            
    
        }
        else if (data.weather[0].main == "Clear"){
    
            weatherIcon.src = "Images/clear.png"
            document.querySelector(".box").style.background = "linear-gradient(135deg, #00f2ff, #ffea03)";
            document.querySelector(".box").style.color = "black"
    
        }
        else if (data.weather[0].main == "Rain"){
    
            weatherIcon.src = "Images/rain.png"
            document.querySelector(".box").style.background = "linear-gradient(to bottom, #c7c7c7, #808080)";
    
        }
        else if (data.weather[0].main == "Drizzle"){
    
            weatherIcon.src = "Images/drizzle.png"
            document.querySelector(".box").style.background = "linear-gradient(to bottom, #8bc9ff, #005fb3)";
    
        }
        else if (data.weather[0].main == "Mist"){
    
            weatherIcon.src = "Images/mist.png"
            document.querySelector(".box").style.background = "linear-gradient(to bottom, #8dd6d6, #008080)";
    
        }
        
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"

        console.log(response)
    }

    }
   

searchBtn.addEventListener("click", ()=>{
    checkWeather(search.value);
})
