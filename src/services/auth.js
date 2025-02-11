import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export default async function login(body) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/local`, body);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function register(body) {
  try {
    console.log(body);
    const response = await axios.post(`${BASE_URL}/auth/local/register`, body);
    return response;
  } catch (error) {
    throw error;
  }
}
