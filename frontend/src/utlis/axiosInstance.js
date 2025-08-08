import axios from 'axios';
import { BASE_URL } from './apiPaths';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, 
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        
    },
    withCredentials: true
})

// Request interceptor to add token to headers if available

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('token')
        if(accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

//Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Handle unauthorized access, e.g., redirect to login
            window.location.href = '/'
            console.error('Unauthorized access - redirecting to login');
            // Optionally, you can redirect to a login page here
        }
        else if(error.response.status === 500) {
            console.error('Server error occurred', error);
        }else if(error.code === 'ECONNABORTED') {
            console.error('Request timeout', error);

        }
        return Promise.reject(error);
    }
);

export default axiosInstance;