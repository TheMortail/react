import axios from 'axios';

const api = axios.create({
  baseURL: 'https://c810a7e2-65e9-4f1a-9516-2adc49a60742.mock.pstmn.io',
});

export default api;
