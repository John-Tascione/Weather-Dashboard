// Api information for weather data
// https://api.openweathermap.org/data/3.0/onecall?lat=
// {lat}&lon={lon}&appid=fc9ecab221936900d677aad55c3a08e3

var cityEl = document.getElementById("city")
var searchBtnEl = document.getElementById("searchBtn")

searchBtnEl.addEventListener("click",searchWeather)

function searchWeather() {
    event.preventDefault()
    console.log("search weather")
    var searchCity = cityEl.value
    console.log(searchCity)
}