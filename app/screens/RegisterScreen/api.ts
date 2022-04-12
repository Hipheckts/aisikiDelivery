
import axios from 'axios';
import url from '../../config/url';


const register = (
    first_name: string,
    phone: string,
    email: string,
    password: string,
    last_name: string,
    referral_code: string,
    toc: boolean,
    city: string,
    origin: string) =>
    axios.post(`${url.baseUrl}/register`, {
        first_name,
        phone,
        email,
        password,
        last_name,
        referral_code,
        toc,
        city,
        origin
    });

const otp = ( phone: any) =>axios.get(`${url.baseUrl}/otp/${phone}`);

export default { register, otp };