import {
    GET_WEATHER_LOADING, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE
  } from '../actions/weather';
  
  const INITIAL_STATE = {
    weather: {},
    loading: false,
    error: null
  }
  
  export default (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_WEATHER_LOADING:
        return {...currentState, loading: true};
        break;
      case GET_WEATHER_SUCCESS:
        return {...currentState, loading: false, error: null, weather: action.weather};
        break;
      case GET_WEATHER_FAILURE:
        return {...currentState, loading: false, error: action.error};
        break;
      default:
        return currentState;
        break;
    }
  }