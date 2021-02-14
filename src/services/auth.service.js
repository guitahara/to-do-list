import axios from 'axios';
const headers = {
    'Content-Type': 'application/json',
};

export const login = async (userName, password) => axios.post('http://localhost:8000/', { userName, password }, { headers });

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('token');
}