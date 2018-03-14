import { fetchWeather } from './weather'
import { fetchTimeZone } from './timezone'
//compose these functions??
export async function fetchCityData(city) {
  const { today, forecast } = await fetchWeather(city)
  const timestamp = today.dt
  const { lat, lon } = today.coord
  const timeZone = await fetchTimeZone(timestamp,lat,lon)//toma wheather y retorna w y tx
  return {
    today,
    forecast,
    timeZone
  }
}

//composed = compose(fetchCityData, fetchTimeZone)
