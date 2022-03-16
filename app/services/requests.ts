
import axios from 'axios';
import url from '../config/url';

export const getProducts = async (limit: string,offset: string) => {
  try {
    const response = await axios.get(`${url.baseUrl}/products?limit=${limit}&offset=${offset}`)
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export const getCartItems = async () => {
  try {
    const response = await axios.get(`${url.baseUrl}/cart`)
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

// export const getCoinMarketChart = async (coinId, selectedRange) => {
//   try {
//     const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${selectedRange}&interval=hourly`)
//     return response.data;
//   } catch (e) {
//     console.log(e)
//   }
// }
