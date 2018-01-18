import { connect } from 'react-redux';
import WeatherComponent from '../components/Weather';
import {getWeatherLoading, getWeather, getWeatherSuccess, getWeatherFailure} from '../actions/weather';

const mapStateToProps = (store) => {
  return {
    weather: store.weather.weather,
    loading: store.weather.loading,
    error: store.weather.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: (token) => {
      dispatch(getWeatherLoading());
      dispatch(getWeather(token)).then(response => {
        if (response.payload.status<400) {
          dispatch(getWeatherSuccess(response.payload.data));

        } else {
          dispatch(getWeatherFailure(response.payload.message));
        }
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);