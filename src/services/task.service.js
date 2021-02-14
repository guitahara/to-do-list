import axios from 'axios';
const token = localStorage.getItem('token')
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
};
const baseUrl = 'http://localhost:8000/v1'

export const create = async (projectId, task) => axios.post(`${baseUrl}/projects/${projectId}/tasks`, task, { headers });

export const update = async (projectId, taskId, data) => axios.patch(`${baseUrl}/projects/${projectId}/tasks/${taskId}`, data, { headers });

export const find = async (projectId) => axios.get(`${baseUrl}/projects/${projectId}`, { headers });

export const remove = async (projectId, taskId,) => axios.delete(`${baseUrl}/projects/${projectId}/tasks/${taskId}`, { headers });