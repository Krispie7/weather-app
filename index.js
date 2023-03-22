function getWeather(){
    fetch ("https://api.weatherapi.com/v1/current.json?key=8e6e59ce692d49aa975195207232203&q=bloomington", {mode:"cors"})
        .then(function(response) {
        return response.json()
        })
        .then(function(response){
            console.log(processData(response))
        })
        .catch(e => {
            console.log(e)
        })
        checkBackground()
}

function processData(data){
    function weatherObject(data){
        this.condition=data.current.condition.text
        this.tempF=data.current.temp_f;
        this.tempC=data.current.temp_c;
    }
    let weather = new weatherObject(data)
    return weather;
}

getWeather()