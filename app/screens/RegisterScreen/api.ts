
import axios from 'axios';
import url from '../../config/url';


const register = (
    name: string,
    phone: string,
    referral_code: string,
    password: string,
    latitude: string,
    longitude: string,
    business_category: number,
    number_of_offices: number,
    logo: string,
    is_corporate: true,
    contact_person: string,
    login: string) =>
    axios.post(`${url.baseUrl}/register`, {
        name,
        phone,
        referral_code,
        password,
        latitude,
        longitude,
        business_category,
        number_of_offices,
        logo,
        is_corporate,
        contact_person,
        login
    });

export default { register };
