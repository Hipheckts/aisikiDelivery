import axios from 'axios';
import url from '../../config/url';


const startTrip = (delivery: string) =>
    axios.patch(`${url.baseUrl}/started/${delivery}`);


    const endTrip = (delivery: string) =>
        axios.patch(`${url.baseUrl}/delivered/${delivery}`);


export default { startTrip, endTrip };
