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
        default:
            return state
    }
}