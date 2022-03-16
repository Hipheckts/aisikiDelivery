
import axios from 'axios';
import url from '../../config/url';


const verify = (phone: string, otp: string) =>
axios.post(`${url.baseUrl}/otp_verify`, { phone, otp });


export default { verify };
