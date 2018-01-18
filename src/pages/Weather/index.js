import React, {Component} from 'react';
import { Weather } from '../../containers/Weather';

class Weather extends Component {
  render() {
    return(
      <div class="card" class="container-fluid">
        <h2>Weather is:</h2>
        <Weather/>
      </div>
      );
  }
}

export default Weather;