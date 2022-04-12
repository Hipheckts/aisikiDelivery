
import axios from 'axios';
import url from '../../config/url';


const verify = (phone: string, otp: string) =>
axios.post(`${url.baseUrl}/otp_verify`, { phone, otp });

const otp = (
    phone: any) =>
    axios.get(`${url.baseUrl}/otp/${phone}`);

// const otp = (
//     phone: any) =>
//     console.log(`${url.baseUrl}/otp/${phone}`);


export default { verify, otp };

