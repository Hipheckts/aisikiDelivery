
import axios from 'axios';
import url from '../../config/url';


const forgot = (phone: string, password: string) =>
axios.post(`${url.baseUrl}/login`, { phone, password });


export default { forgot };
