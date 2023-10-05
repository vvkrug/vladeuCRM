import axios from 'axios';

const baseURL = 'https://dummyjson.com';

export const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

export const fetchUsers = () => api.get('/users');
