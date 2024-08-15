var card = document.getElementById("weather");
var search = document.getElementById("head");
var searchbar = document.getElementById("searchbar");
var sbtn = document.querySelector(".card .search button");
var city = document.getElementById("body");
var weath = document.getElementById("weathimag");
var details = document.getElementById("foot");
var humidity = document.getElementById("humi");
var humidy = document.getElementById("humidity");
var windspeed = document.getElementById("ws");
var wind = document.getElementById("wind");
var cont = document.getElementById("cont");

const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkweather(cityname) {
    const response = await fetch(apiurl + cityname + '&appid=5d204ec4584d4eaaa366a27f75ab3e04');
    var data = await response.json();
    console.log(data);
    if(data.message=='city not found'){
        weath.innrHTML = "";
        document.getElementById("city").innerHTML = "";
        document.getElementById("temp").innerHTML = "";
        document.getElementById("numh").innerHTML = "";
        document.getElementById("numw").innerHTML = "";
        windspeed.innerHTML = "";
        humidity.innerHTML = "";
    }    
    else{
        cont.style.display="block";
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temp").innerHTML = Math.floor(data.main.temp) + "&#8451;";
        document.getElementById("numh").innerHTML = data.main.humidity + "%";
        document.getElementById("numw").innerHTML = data.wind.speed + "KM/H";
    
        var weather = data.weather[0].main;
    
        if (weather === "Clouds") {
            weath.innerHTML = "<img src='images/clouds.png' alt='Cloudy'>";
        } else if (weather === "Rain") {
            weath.innerHTML = "<img src='images/rain.png' alt='Rainy'>";
        } else if (weather === "Clear") {
            weath.innerHTML = "<img src='images/sunny.png' alt='Sunny'>";
        } else if (weather === "Snow") {
            weath.innerHTML = "<img src='images/snow.png' alt='Snowy'>";
        } else if (weather === "Thunderstorm") {
            weath.innerHTML = "<img src='images/storm.png' alt='Thunderstorm'>";
        } else {
            weath.innerHTML = "<img src='images/partcloud.png' alt='Partly Cloudy'>";
        }
    }
}
sbtn.addEventListener("click", () => {
    checkweather(searchbar.value);
});
