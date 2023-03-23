let inputLocation = "Bloomington"

let temperatureC= document.getElementById("tempC")
let temperatureF= document.getElementById("tempF")
let condition=document.getElementById("condition")

function getWeather(){
    fetch (`https://api.weatherapi.com/v1/current.json?key=8e6e59ce692d49aa975195207232203&q=${inputLocation}`, {mode:"cors"})
        .then(function(response) {
        return response.json()
        })
        .then(function(response){
            console.log(processData(response))
        })
        .catch(e => {
            console.log(e)
        })
}

function processData(data){
    function weatherObject(data){
        this.condition=data.current.condition.text
        this.tempF=data.current.temp_f;
        this.tempC=data.current.temp_c;
    }
    let weather = new weatherObject(data)
    console.log(weather)
    if (weather.tempC== undefined){
        temperatureC.innerHTML="..."
    }
    else {
        temperatureC.innerHTML=weather.tempC+"°C"
    }
    if (weather.tempF== undefined){
        temperatureF.innerHTML="..."
    }
    else {
        temperatureF.innerHTML=weather.tempF+"°F"
    }
    if (weather.condition== undefined){
        condition.innerHTML="..."
    }
    else {
        condition.innerHTML=weather.condition
    }
    return weather;
}

let locationInput =document.getElementById("locationInput")
let searchButton = document.getElementById("searchButton")

locationInput.addEventListener('keyup', function (event) {
    if (event.key ==="Enter"){
        inputLocation = locationInput.value
        getWeather()
    }
})

searchButton.addEventListener("click", function (e) {
    inputLocation = locationInput.value
    getWeather()
})

