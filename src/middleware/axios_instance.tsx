import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
    validateStatus: function (status) {
        return status >= 200 && status < 500;
    }
})

export default axiosInstance;

