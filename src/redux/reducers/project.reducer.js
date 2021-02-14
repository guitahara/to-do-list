import { projectActionTypes } from '../action-types/index';

const initialState = { projects: [] };

export default function project(state = initialState, action) {
    switch (action.type) {
        case projectActionTypes.PROJECT_CREATE_REQUEST:
            return state
        case projectActionTypes.PROJECT_CREATE_SUCCESS:
            const { projects } = state
            projects.push(action.project)
            return { projects }
        case projectActionTypes.PROJECT_CREATE_ERROR:
            return state
        case projectActionTypes.PROJECT_FIND_REQUEST:
            return state
        case projectActionTypes.PROJECT_FIND_SUCCESS:
            return { projects: action.projects }
        case projectActionTypes.PROJECT_FIND_ERROR:
            return state
        case projectActionTypes.PROJECT_REMOVE_REQUEST:
            return state
        case projectActionTypes.PROJECT_REMOVE_SUCCESS:
            const data = state.projects.filter(project => project._id !== action.projectId)
            return { projects: data }
        case projectActionTypes.PROJECT_REMOVE_ERROR:
            return state
        case projectActionTypes.PROJECT_UPDATE_REQUEST:
            return state
        case projectActionTypes.PROJECT_UPDATE_SUCCESS:
            const updatedProjects = state.projects.map(project => {
                if (project._id === action.data.projectId) {
                    return { ...project, name: action.data.projectName }
                }
                return project
            })
            return { projects: updatedProjects }
        case projectActionTypes.PROJECT_UPDATE_ERROR:
            return state
        default:
            return state
    }
}