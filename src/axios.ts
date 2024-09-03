// api.js

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
// Cria uma instância do Axios
const api = axios.create({
  baseURL: 'https://typebot-evolution-api.kvhgik.easypanel.host/',
  headers: {
    'Content-Type': 'application/json',
    apikey: process.env.APISECRET, // Adiciona o header `apikey` à requisição
  }, // Substitua pela URL base da sua API
});

// Interceptor para logar as requisições
api.interceptors.request.use(
  (request) => {
    console.log('Requisição:', {
      url: request.url,
      method: request.method,
      headers: request.headers,
      data: request.data,
    });
    return request;
  },
  (error) => {
    console.error('Erro na requisição:', error);
    return Promise.reject(error);
  },
);

export default api;
