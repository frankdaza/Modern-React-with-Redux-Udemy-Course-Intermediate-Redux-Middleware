import Axios from 'axios';

const API_KEY = 'b6907d289e10d714a6e88b30761fae22';
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&${city},us`;
  const request = Axios.get(URL);

  return {
    type: FETCH_WEATHER,
    paylos: request
  };
}