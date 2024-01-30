// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Laravel API'nizin adresini buraya ekleyin
});

export const getFutbolcular = () => api.get('/futbolcular');
export const addFutbolcu = (futbolcu) => api.post('/futbolcular', futbolcu);
export const updateFutbolcu = (id, futbolcu) => api.put(`/futbolcular/${id}`, futbolcu);
export const deleteFutbolcu = (id) => api.delete(`/futbolcular/${id}`);
