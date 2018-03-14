import { fetchCityData } from './models/city'
import { renderCity } from './controllers/city'

document.querySelector( '.js-search-city' )
    .addEventListener( 'click', searchCity );

async function searchCity() {
    const textField = document.querySelector( '.js-city-field' );
    const city = textField.value;
    textField.value = '';
    const cityData = await fetchCityData(city)
    renderCity(cityData)

}
