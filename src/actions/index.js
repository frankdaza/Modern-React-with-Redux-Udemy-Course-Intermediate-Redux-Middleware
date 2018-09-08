import Axios from 'axios';

const API_KEY = '4be2f28af56d9f3e4d758f04b18e6cb7';
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  // const URL = `${ROOT_URL}&q=${city},us`;
  const URL = `https://samples.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEY}`;
  const request = Axios.get(URL);

  return {
    type: FETCH_WEATHER,
    paylos: request
  };
}