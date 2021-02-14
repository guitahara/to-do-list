import axios from 'axios';

const baseUrl = 'http://localhost:8000/v1'

export const create = async (project) => {
    const headers = buildHeaders()
    return axios.post(`${baseUrl}/projects`, project, { headers })
};

export const update = async (projectId, data) => {
    const headers = buildHeaders()
    return axios.patch(`${baseUrl}/projects/${projectId}`, data, { headers })
};

export const find = async () => {
    const headers = buildHeaders()
    return axios.get(`${baseUrl}/projects`, { headers })
};

export const remove = async (projectId) => {
    const headers = buildHeaders()
    return axios.delete(`${baseUrl}/projects/${projectId}`, { headers })
};

const buildHeaders = () => {
    const token = localStorage.getItem('token')
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
}