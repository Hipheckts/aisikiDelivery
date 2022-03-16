import axios from 'axios';
import url from '../../config/url';


const addToCart = (quantity: string,
    discount: string,
    product_id: string,
    price_unit: string,
    name: string) =>
    axios.post(`${url.baseUrl}/cart`, {
        items: [{ quantity, discount, product_id, price_unit, name }]
    });


export default { addToCart };
