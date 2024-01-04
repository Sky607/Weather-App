var input = document.getElementById("cityName");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
    //event.preventDefault();
    document.getElementById("btn btn-primary").click();
     }
});
function weatherInfomation(){
   let city=document.getElementById("cityName").value
   var url='https://api.weatherapi.com/v1/current.json?key=d0ccc89532ce459499953059232812&q='+city+''
if(city=="" ){  
    alert("Please enter a city")
        }
else{      
    fetch(url)
    .then(response => {
    if (response.ok){
     return response.json()
     }
    else{
    throw new Error("Enter city name or check the entered value")
     }
    })        
    .then(res=>{
    if(res.current.condition.text == "Mist"){
    document.body.style.backgroundImage = "url('./images/Mist.jpg')"
    document.getElementById("logo").style.color = "black"

    }
    else if(res.current.condition.text == "Sunny" || res.current.condition.text =="Clear"){
        document.body.style.backgroundImage = "url('./images/Sunny.webp')"
        document.getElementById("logo").style.color = "white"
    }
    else if(res.current.condition.text == "Cloudy" || res.current.condition.text == "Partly cloudy"|| res.current.condition.text=="Patchy rain possible"){
            document.body.style.backgroundImage = "url('./images/cloudy.avif')"
            document.getElementById("logo").style.color = "white"
    }
    else if(res.current.condition.text == "Raining" || res.current.condition.text == "Light freezing rain" || res.current.condition.text == "Lightning"
    || res.current.condition.text == "Heavy rain"){
            document.body.style.backgroundImage = "url('./images/rainy.jpg')"
            document.getElementById("logo").style.color = "white"
    }

    document.getElementById("content").style.display='block' 
    document.getElementById("country").innerHTML=res.location.country
    document.getElementById("name").innerHTML=res.location.name
    document.getElementById("lat").innerHTML =res.location.lat 
    document.getElementById("log").innerHTML =res.location.lon
    document.getElementById("time").innerHTML =res.location.localtime
    document.getElementById("wind").innerHTML =res.current.wind_kph
    document.getElementById("weather").innerHTML =res.current.condition.text
    document.getElementById("humid").innerHTML =res.current.humidity
    }).catch(error => alert(error))
}}
