import { expect } from 'chai'
import { getParamString, getOWM, getTimeZone } from './endpoints'
import { APIKEY, GAPIKEY } from '../constants/constants'

describe('Endpoints', () => {
  it('Should translate undefined and {} to emty string', () => {
    expect(getParamString()).to.equal('')
    expect(getParamString({})).to.equal('')
  })
  it('Should translate an object to a param string', () => {
    const obj = {
      key: 'value',
      key2: 'value2'
    }
    const result = "&key=value&key2=value2"
    expect(getParamString(obj)).to.equal(result)
  })
    it('Should create full url', () => {
      const obj = {
        key: 'value',
        key2: 'value2'
      }
      const url = getOWM('endpoint')(obj)('city')
      const prefix = 'https://api.openweathermap.org/data/2.5/'
      const paramString = getParamString(obj)
      const result = `${prefix}endpoint?q=city&appid=${APIKEY}&${paramString}`
      expect(url).to.equal(result)
    })

    it( 'should assemble the google timezone API query', () => {
      const lon = 153.03;
      const lat = -27.47;
      const timestamp = 1494780000;
      const url = getTimeZone(lat,lon)(timestamp);
      const prefix = 'https://maps.googleapis.com/maps/api/timezone/json?location=';
      const result = `${prefix}${lat},${lon}&timestamp=${timestamp}&key=${GAPIKEY}`;

      expect(url).to.equal(result)
    })
})
