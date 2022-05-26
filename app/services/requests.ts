
import axios from 'axios';
import url from '../config/url';

export const getProfile = async () => {
  try {
    const response = await axios.get(`${url.baseUrl}/profile`)
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export const getDeliveries = async (limit: string,offset: string) => {
  try {
    const response = await axios.get(`${url.baseUrl}/assigned?limit=${limit}&offset=${offset}`)
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export const getIncompletedDeliveries = async (limit: string,offset: string) => {
  try {
    const response = await axios.get(`${url.baseUrl}/in_transist?limit=${limit}&offset=${offset}`)
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export const getCompletedDeliveries = async (limit: string,offset: string) => {
  try {
    const response = await axios.get(`${url.baseUrl}/completed?limit=${limit}&offset=${offset}`)
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



export const getDeliveryMetrics = async () => {
  try {
    const response = await axios.get(`${url.baseUrl}/metrics`)
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
