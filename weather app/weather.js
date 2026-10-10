// Using FREE Open-Meteo + OpenStreetMap (no key)
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherEl = document.getElementById("weather");
const loader = document.getElementById("loader");
const errorEl = document.getElementById("error");
const recentEl = document.getElementById("recent");

function saveRecent(city) {
  let rec = JSON.parse(localStorage.getItem("cities") || "[]");
  rec = [city,...rec.filter(c => c!== city)].slice(0, 4);
  localStorage.setItem("cities", JSON.stringify(rec));
  renderRecent();
}
function renderRecent() {
  let rec = JSON.parse(localStorage.getItem("cities") || "[]");
  recentEl.innerHTML = rec.map(c => `<span onclick="getWeatherByCity('${c}')">${c}</span>`).join("");
}

async function getCoords(city) {
  const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
  const data = await res.json();
  if (!data.results) throw new Error("City not found");
  return data.results[0];
}

async function getWeatherByCity(city) {
  try {
    loader.classList.remove("hidden");
    weatherEl.classList.add("hidden");
    errorEl.innerText = "";
    const loc = await getCoords(city);
    await fetchWeather(loc.latitude, loc.longitude, loc.name, loc.country);
    saveRecent(loc.name);
  } catch (e) {
    errorEl.innerText = e.message;
  } finally {
    loader.classList.add("hidden");
  }
}

async function fetchWeather(lat, lon, name, country) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure,sunrise,sunset&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("cityName").innerText = `${name}, ${country}`;
  document.getElementById("date").innerText = new Date().toLocaleDateString("en-NG", {weekday:"long", hour:"2-digit", minute:"2-digit"});
  document.getElementById("temp").innerText = Math.round(data.current.temperature_2m) + "°";
  document.getElementById("feels").innerText = Math.round(data.current.apparent_temperature) + "°C";
  document.getElementById("humidity").innerText = data.current.relative_humidity_2m + "%";
  document.getElementById("wind").innerText = data.current.wind_speed_10m + " km/h";
  document.getElementById("pressure").innerText = Math.round(data.current.surface_pressure) + " hPa";
  document.getElementById("sunrise").innerText = new Date(data.current.sunrise).toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});
  document.getElementById("sunset").innerText = new Date(data.current.sunset).toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});

  const code = data.current.weather_code;
  const info = weatherCodeMap(code);
  document.getElementById("desc").innerText = info.text;
  document.getElementById("icon").src = info.icon;

  // Change background
  document.body.className = info.bg;

  // Hourly
  document.getElementById("hourly").innerHTML = data.hourly.time.slice(0, 12).map((t, i) => `
    <div>
      <span style="font-size:11px;color:#888">${new Date(t).getHours()}:00</span>
      <div>${weatherCodeMap(data.hourly.weather_code[i]).emoji}</div>
      <b>${Math.round(data.hourly.temperature_2m[i])}°</b>
    </div>
  `).join("");

  // 5-Day
  document.getElementById("forecast").innerHTML = data.daily.time.map((d, i) => `
    <div>
      <span>${new Date(d).toLocaleDateString("en", {weekday:"short"})}</span>
      <span>${weatherCodeMap(data.daily.weather_code[i]).emoji} ${weatherCodeMap(data.daily.weather_code[i]).text}</span>
      <b>${Math.round(data.daily.temperature_2m_max[i])}° / ${Math.round(data.daily.temperature_2m_min[i])}°</b>
    </div>
  `).join("");

  weatherEl.classList.remove("hidden");
}

function weatherCodeMap(code) {
  if ([0,1].includes(code)) return {text:"Clear Sky", emoji:"☀️", icon:"https://openweathermap.org/img/wn/01d@2x.png", bg:"sunny"};
  if ([2,3].includes(code)) return {text:"Cloudy", emoji:"☁️", icon:"https://openweathermap.org/img/wn/03d@2x.png", bg:"cloudy"};
  if ([45,48].includes(code)) return {text:"Foggy", emoji:"🌫️", icon:"https://openweathermap.org/img/wn/50d@2x.png", bg:"cloudy"};
  if ([51,53,55,61,63,65,80,81,82].includes(code)) return {text:"Rainy", emoji:"🌧️", icon:"https://openweathermap.org/img/wn/09d@2x.png", bg:"rainy"};
  if ([71,73,75,77,85,86].includes(code)) return {text:"Snowy", emoji:"❄️", icon:"https://openweathermap.org/img/wn/13d@2x.png", bg:"cloudy"};
  if ([95,96,99].includes(code)) return {text:"Thunderstorm", emoji:"⛈️", icon:"https://openweathermap.org/img/wn/11d@2x.png", bg:"rainy"};
  return {text:"Partly Cloudy", emoji:"⛅", icon:"https://openweathermap.org/img/wn/02d@2x.png", bg:"cloudy"};
}

searchBtn.onclick = () => getWeatherByCity(cityInput.value.trim());
cityInput.addEventListener("keypress", e => { if(e.key==="Enter") getWeatherByCity(cityInput.value.trim()) });

document.getElementById("locateBtn").onclick = () => {
  navigator.geolocation.getCurrentPosition(async pos => {
    const lat = pos.coords.latitude, lon = pos.coords.longitude;
    // Reverse geocode
    const r = await fetch(`https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}&language=en`);
    const j = await r.json();
    const place = j.results? j.results[0] : {name:"My Location", country:""};
    fetchWeather(lat, lon, place.name, place.country);
  }, () => errorEl.innerText = "Location permission denied");
};

// Init
renderRecent();
getWeatherByCity("Ibadan");