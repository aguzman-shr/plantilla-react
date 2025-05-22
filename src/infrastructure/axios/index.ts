import axios, { type AxiosInstance } from 'axios';
import { useAuthStore } from '@/store/useAuthStore';

const baseApiURL = import.meta.env.VITE_API_URL;
const api: AxiosInstance = axios.create({
    baseURL: baseApiURL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Client-Tenant-URL': window.location.origin
    },
});

api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) {
        config.headers['X-Authorization'] = token;
    }
    return config;
});

export default api;