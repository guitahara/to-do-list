import axios from 'axios';
const headers = {
    'Content-Type': 'application/json',
};

export const register = async (registry) => axios.post('http://localhost:8000/v1/users', registry, { headers });