import { getTodaysTemplate, getForecastTable } from '../utils/parser.js'


const renderForecast = ( forecastTemplate, firstIndex, lastIndex ) => {
    const tableMarkup = forecastTemplate( firstIndex, lastIndex )
    const containerNode = document.querySelector( '.js-forecast' )
    if ( containerNode ) containerNode.innerHTML = tableMarkup
}

export const renderCity = ( { today, forecast, timeZone } ) => {
    const domElement = document.querySelector( '.js-city-weather' )
    const todayData = getTodaysTemplate( today, timeZone )
    let firstPage = 0;
    const numOfPages = 5;

    domElement.innerHTML = `
        ${ todayData }
        <a class="waves-effect waves-light btn js-up"> Up </a>
        <div class="js-forecast"></div>
          <a class="waves-effect waves-light btn js-down">Down</a>`;

    const forecastTemplate = getForecastTable( forecast, timeZone );
    const wrappedRenderForecast = () =>
        renderForecast( forecastTemplate, firstPage, firstPage + numOfPages - 1 );
    wrappedRenderForecast();

    const moveUp = () => {
        firstPage = Math.max( 0, firstPage - 1 );
        wrappedRenderForecast();
    }
    const moveDown = () => {
        firstPage = Math.min( 10, firstPage + 1 )
        wrappedRenderForecast()
    }

    document.querySelector( '.js-up' )
        .addEventListener( 'click', moveUp )
    document.querySelector( '.js-down' )
        .addEventListener( 'click', moveDown )
}
