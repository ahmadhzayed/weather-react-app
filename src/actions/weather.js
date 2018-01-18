import Axios from 'axios';

// Action WEATHER
//url
const weatherKey = 'e5e8b1cecf71616cba6e1a9820ff62eb';
const weatherApi = (token) => `http://api.openweathermap.org/data/2.5/forecast?q=${token}&APPID=${weatherKey}`;
// Get All WEATHER

export const GET_WEATHER_LOADING = 'GET_WEATHER_LOADING';
export const GET_WEATHER = 'GET_WEATHER';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

// Action Creators

// Get All WEATHER

export const getWeatherLoading = () => {
  return{
    type: GET_WEATHER_LOADING
  }
}

export const getWeather = (token) => {
  const payload = Axios.get(weatherApi(token));
  return{
    type: GET_WEATHER,
    payload
  }

}

export const getWeatherSuccess = (weather) => {
  return{
    type: GET_WEATHER_SUCCESS,
    weather
  }
}

export const getWeatherFailure = (error) => {
  return{
    type: GET_WEATHER_FAILURE,
    error
  }
}
