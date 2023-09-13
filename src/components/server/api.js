import axios from "axios"
const BASE_URL = 'https://6500aa1518c34dee0cd5455c.mockapi.io/api/v1';



export const axiosRequestGet = async( ) => {
    const {data} = await axios.get(`${BASE_URL}/contacts`)
    return data
}
export const axiosRequestPost = async (contact) => {
  const { data } = await axios.post(`${BASE_URL}/contacts`,contact);
  return data;
};
export const axiosRequestDelete = async id => {
  const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
  return data;
};