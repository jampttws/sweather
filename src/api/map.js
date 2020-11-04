import axios from "axios";

async function getCity(city) {
  const response = await axios.get(
    `api.openweathermap.org/data/2.5/weather?q=${city}&appid=8bce6fb95dd555b4e1d15cba00656949`
  );
  return response.data;
}

export { getCity };
