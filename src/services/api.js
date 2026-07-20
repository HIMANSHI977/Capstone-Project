import axios from "axios";

const API = "http://localhost:3000/products";

export async function getProducts() {
  const response = await axios.get(API);
  return response.data;
}

export async function getProduct(id) {
  const response = await axios.get(`${API}/${id}`);
  return response.data;
}