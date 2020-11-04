import axios from "axios";

async function getWeather(city) {

    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8bce6fb95dd555b4e1d15cba00656949`);
    return response.data;
}

async function getOneCallWeather(payload) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${payload.lat}&lon=${payload.lon}&exclude=minutely&appid=8bce6fb95dd555b4e1d15cba00656949`
  );
  return response.data;

}
export { getWeather, getOneCallWeather };
