// Api information for weather data
// https://api.openweathermap.org/data/3.0/onecall?lat=
// {lat}&lon={lon}&appid=fc9ecab221936900d677aad55c3a08e3

// Location api call
// http://api.openweathermap.org/geo/1.0/direct?q=
// London&appid=appid=fc9ecab221936900d677aad55c3a08e3

var cityEl = document.getElementById("city")
var searchBtnEl = document.getElementById("searchBtn")
var apiLink1 = "https://api.openweathermap.org/data/3.0/onecall?lat="
var apiLink2 = "&lon="
var apiLink3 = "&appid=fc9ecab221936900d677aad55c3a08e3"
var locationLink1 = "http://api.openweathermap.org/geo/1.0/direct?q="
var locationLink2 = "&appid=fc9ecab221936900d677aad55c3a08e3"

searchBtnEl.addEventListener("click",searchWeather)

// Weather lookup
function searchWeather() {
    event.preventDefault()
    console.log("search weather")
    var searchCity = cityEl.value
    console.log(searchCity)
    let locationSearch = locationLink1 + searchCity + locationLink2
    console.log(locationSearch)
    fetch(locationSearch)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
          console.log(data);
        })
}
