import axios from 'axios';

export const sampleApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json'
    }
});