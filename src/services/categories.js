import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export default async function getCategoryList(category, jwt) {
  try {
    const response = await axios.get(`${BASE_URL}/${category}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}
