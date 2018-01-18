import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clear from './clear.png'
import cloud from './cloud.png'
import snow from './snowflake.png'
import sunny from './sunny.png'
import umbrella from './umbrella.png'
import {FormGroup, Label} from 'reactstrap';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      City: ''
    }    
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({...this.state, [e.target.name]: e.target.value});
    const {
      getWeather
    } = this.props;
    getWeather(this.state.City);
  }
  // componentWillMount() {
  //   const {
  //     getWeather
  //   } = this.props;
  //   getWeather(this.state.City);
  // }

  componentWillReceiveProps(nextProps) {
    const {
		getWeather, weather
    } = this.props;
  }

  render() {
    const {weather, loading, error} = this.props;
    var cityy='';
    var descr='';
          return(
            <div>
        <FormGroup className="select-group">
        <Label htmlFor="City" className="sr-only">City</Label>
        <select name="City" className="form-control" onChange={this.handleChange}>
        <option disabled selected value>Select City</option>
        <option value="London">London</option>
        <option value="Arab Republic of Egypt">Egypt</option>
        <option value="Novocheboksarsk">Russia</option>
        <option value="West New York">USA</option>
        <option value="Paris 01 Louvre">France</option>
        <option value="Província de Barcelona">Spain</option>
        <option value="Valenzano">Italy</option>
          </select>
        </FormGroup>
        {
          (Object.keys(weather).length  == 0)
          ? (loading)
          ? <p className="loading-message">Loading</p>
          : (error)
          ? <p className="error-message"></p>
          : null
          :cityy = weather.city.name
        }
      <div>
        {
          (Object.keys(weather).length  == 0)
          ? (loading)
          ? <p className="loading-message">Loading your recent weather data...</p>
          : (error)
          ? <p className="error-message">Oops, something went wrong!</p>
          : null
          : weather.list.map(item => {
              descr = item.weather[0].description;
              var imgsrc='';
                if (descr === "clear sky") {
                  imgsrc = clear;
                }
                else if(descr === "few clouds" || descr === "scattered clouds" || descr === "broken clouds" || descr === "overcast clouds"){
                  imgsrc = cloud;
                }
                else if(descr === "light rain" || descr === "moderate rain"){
                  imgsrc = umbrella;
                }
                else{
                  imgsrc = "#";
                }
            return(
            <div>Time: {Date(item.dt)} Temp: {Math.round(item.main.temp-273.15)}c Humidity: {item.main.humidity} Clouds: {item.clouds.all}  Description: {item.weather[0].description} <img src={imgsrc}/></div>
            );
          })
        }
      </div>
    </div>
  )
          }//render end
  
}//class end