import axios from 'axios';
import { getTimeZone} from '../utils/endpoints.js';

export const fetchTimeZone = async ( timestamp, lat, lon ) => {
    const response = await axios.get( getTimeZone( lat, lon )( timestamp ) );
    return response.data;
};
