import axios from 'axios'
import { getOWM } from '../utils/endpoints'

const todaysWeatherURL = getOWM('weather')({ units: 'metric' })
const forecastURL = getOWM('forecast')({ units: 'metric', cnt: 16 })

const requestTodaysWeather = async (city) =>
  axios.get(todaysWeatherURL(city))

const requestWeatherForecast = async (city) =>
  axios.get(forecastURL(city))

export const fetchWeather = async ( city ) => {
  const [ today, forecast ] = await Promise.all( [
      requestTodaysWeather( city ),
      requestWeatherForecast( city )
  ] );
  return { today: today.data, forecast: forecast.data };
}
