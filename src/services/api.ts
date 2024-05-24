import axios from 'axios';
import { Product } from '../types/Product';

const api = axios.create({
  baseURL: 'http://localhost:5001',
});

export const getProducts = () => api.get<Product[]>('/products');
export const getProduct = (id: number) => api.get<Product>(`/products/${id}`);
