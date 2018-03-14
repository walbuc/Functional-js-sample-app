import { APIKEY, GAPIKEY } from '../constants/constants'

export const getParamString = (args = {}) =>
  Object.entries( args ).reduce((str, param) =>
     `${str}&${param[0]}=${param[1]}`
  , '')

 const getOWMURL =
  apiKey =>
  url =>
  endpoint =>
  params =>
  city =>
  `${ url }`
  + `${ endpoint }?q=${ city }&appid=${ apiKey }&`
  + getParamString(params)

const getTimeZoneURL =
  apiKey =>
  url =>
  (lat, long) =>
  (timestamp) =>
  `${ url }${ lat },${ long }&timestamp=${ timestamp }&key=${ apiKey }`

export const getOWM = getOWMURL(APIKEY)('https://api.openweathermap.org/data/2.5/')
export const getTimeZone = getTimeZoneURL(GAPIKEY)('https://maps.googleapis.com/maps/api/timezone/json?location=')
