const button = document.getElementById("cityBtn");
const cityy = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("c");
const icon = document.getElementById("ic");
const w_dec = document.getElementById("description");
const w_reg = document.getElementById("region");
const w_dir = document.getElementById("wind_dir");
const w_speed = document.getElementById("wind");
const w_pre = document.getElementById("atmp");
const w_lat = document.getElementById("lat");
const w_long = document.getElementById("lang");
const tempaaa = document.querySelector(".tempaaa");



const api_key = "22c6989252591122c74d77db8c733e6d";

const fn = async (event)=>{
    event.preventDefault();
    let city = cityy.value;
    if(city.length==0){
        city_name.innerText= "Plese Write Something";

    }else{
        try{
        const url = `https://api.weatherapi.com/v1/current.json?key=%204b7867b91b0e4f61bd364431230605&q=${city}&aqi=no`
        const url1 = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api_key}`

        const url_response = await fetch(url) ;
        const url1_response = await fetch(url1) ;


        const url_data = await url_response.json()
        const url1_data = await url1_response.json()


        var lat = url1_data[0].lat;
        var lon = url1_data[0].lon;
        const weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
        const weather_response = await fetch(weather) ;
        const weather_data = await weather_response.json()
        var icon_img = `https://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`
 
        city_name.innerText= url_data.location.name;
        tempaaa.innerText= url_data.current.temp_c;
        icon.src = icon_img; 
        w_dec.innerText = weather_data.weather[0].description;
        w_lat.innerText = weather_data.coord.lat;
        w_long.innerText = weather_data.coord.lon;
        w_reg.innerText = url_data.location.region;
        wind.innerText = url_data.current.wind_mph+" Miles Per Hour";
        w_dir.innerHTML = url_data.current.wind_dir;
        w_pre.innerHTML = url_data.current.pressure_mb+" Millibar";

        

        }catch{
        city_name.innerText= "Plese Enter The City Name Properly.";


        }
        
    }
}


button.addEventListener("click",fn)
