import axios from 'axios';
const token = localStorage.getItem('token')
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
};
const baseUrl = 'http://localhost:8000/v1'

export const create = async (project) => axios.post(`${baseUrl}/projects`, project, { headers });

export const update = async (projectId, data) => axios.patch(`${baseUrl}/projects/${projectId}`, data, { headers });

export const find = async () => axios.get(`${baseUrl}/projects`, { headers });

export const remove = async (projectId) => axios.delete(`${baseUrl}/projects/${projectId}`, { headers });