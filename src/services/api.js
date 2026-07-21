import axios from "axios";

const API = "http://localhost:3000/products";

// GET ALL PRODUCTS
export async function getProducts() {
  const response = await axios.get(API);
  return response.data;
}

// GET SINGLE PRODUCT
export async function getProduct(id) {
  const response = await axios.get(`${API}/${id}`);
  return response.data;
}

// ADD PRODUCT
export async function addProduct(product) {
  const response = await axios.post(API, product);
  return response.data;
}

// UPDATE PRODUCT
export async function updateProduct(id, product) {
  const response = await axios.put(`${API}/${id}`, product);
  return response.data;
}

// DELETE PRODUCT
export async function deleteProduct(id) {
  const response = await axios.delete(`${API}/${id}`);
  return response.data;
}