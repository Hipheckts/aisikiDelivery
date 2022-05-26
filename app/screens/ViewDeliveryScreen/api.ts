import axios from 'axios';
import url from '../../config/url';


const startTrip = (delivery: string) =>
    // axios.patch(`${url.baseUrl}/started/${delivery}`);
    axios.patch(`${url.baseUrl}/change_status`, { "delivery_status":"in_transit", "id":delivery });


    const endTrip = (delivery: string) =>
        // axios.patch(`${url.baseUrl}/delivered/${delivery}`);
        axios.patch(`${url.baseUrl}/delivered`, { "ref":"completed", "order_id":delivery });


export default { startTrip, endTrip };
