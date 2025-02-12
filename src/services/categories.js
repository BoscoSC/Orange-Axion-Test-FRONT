import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export default async function getCategoryList(category, jwt, sort) {
  try {
    let url = `${BASE_URL}/${category}`;
    if (sort) {
      url += `?_sort=name:${sort}`;
    }
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}
