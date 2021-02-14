import axios from 'axios';

const baseUrl = 'http://localhost:8000/v1'

export const create = async (projectId, task) => {
    const headers = buildHeaders();
    return axios.post(`${baseUrl}/projects/${projectId}/tasks`, task, { headers })
};

export const update = async (projectId, taskId, data) => {
    const headers = buildHeaders();
    return axios.patch(`${baseUrl}/projects/${projectId}/tasks/${taskId}`, data, { headers })
};

export const find = async (projectId) => {
    const headers = buildHeaders();
    return axios.get(`${baseUrl}/projects/${projectId}`, { headers })
};

export const remove = async (projectId, taskId,) => {
    const headers = buildHeaders();
    return axios.delete(`${baseUrl}/projects/${projectId}/tasks/${taskId}`, { headers })
};

const buildHeaders = () => {
    const token = localStorage.getItem('token')
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
}