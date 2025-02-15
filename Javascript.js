var month=['JAN', 'FEB', 'MAR' , 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

var day=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'];

var d = new Date();
document.getElementById('year').innerHTML = d.getFullYear();
document.getElementById('date').innerHTML = d.getDate();
document.getElementById('month').innerHTML = month[d.getMonth()];
document.getElementById('day').innerHTML = day[d.getDay()];

let cityName = "Chennai";

 function cityNameChange() {
    cityName = document.getElementById("city-name").value;
    run();
 }

 var temp;
 let feel;
 const apiKey = '0cefbdd8089c7b724b58eac94e84c704';

 function run() {
    let city = cityName;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        feel = data.weather[0].main;
        document.getElementById('feel').innerHTML = feel;
        title1= data.name;
        document.getElementById('title1').innerHTML = "Weather Today At " + title1;
        temp = data.main.temp ;
        temp -= 273.15;

        document.getElementById('temp').innerHTML = Math.floor(temp);

 })
 .catch(error => alert("Enter the correct City name"));
 }
 run();
