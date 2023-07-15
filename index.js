// You must run this app on a live server

apiKey = "11c0b5ac87206b39d429f07a6fe0df3b";
apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let A = document.getElementById("searchA");
let search = document.getElementById("btn");
let wh = document.getElementById("wh");
let whUp = document.querySelector(".wheather");
let erR = document.querySelector(".error");

async function checkWheather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".wheather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".hymidye").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      wh.src = "/imgs/clear.png";
    } else if (data.weather[0].main == "Clear") {
      wh.src = "./imgs/clouds.png";
    } else if (data.weather[0].main == "drizzle") {
      wh.src = "./imgs/drizzle.png";
    } else if (data.weather[0].main == "mist") {
      wh.src = "./imgs/mist.png";
    } else if (data.weather[0].main == "rain") {
      wh.src = "./imgs/rain.png";
    }

    document.querySelector(".wheather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
search.addEventListener("click", () => {
  checkWheather(A.value);
  whUp.classList.add("active");
});
