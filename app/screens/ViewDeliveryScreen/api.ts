import axios from 'axios';
import url from '../../config/url';


const endTrip = (delivery: string) =>
    axios.patch(`${url.baseUrl}/delivered/${delivery}`);


export default { endTrip };
