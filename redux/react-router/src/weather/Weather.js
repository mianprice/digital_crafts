import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Weather.actions';

class Weather extends React.Component {
  render() {
    let weather = this.props.weatherData;
    let weatherDisplay;
    if (weather) {
      if (weather.name !== this.props.params.place) {
        this.props.getWeather(this.props.params.place);
      } else {
        weatherDisplay = <p>
          The weather in {weather.name} is:
          {weather.main.temp} degrees F<br/>
          with a high of {weather.main.temp_max} F<br/>
          and a low of {weather.main.temp_min} F.
        </p>;
      }
    } else if (this.props.isFetching) {
      weatherDisplay = <p><img src="/images/gears.gif" alt="loading"/></p>;
    } else if (this.props.error) {
      weatherDisplay = <p>{this.props.error}</p>;
    } else {
      this.props.getWeather(this.props.params.place);
    }
    return (
      <div>
        <h1>{this.props.params.place}</h1>
        {weatherDisplay}
      </div>
    );
  }
}

const WeatherContainer = ReactRedux.connect(
  state => state.weather,
  actions
)(Weather);

export default WeatherContainer;
