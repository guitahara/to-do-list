import { projectActionTypes } from '../action-types/index';

const initialState = { projects: [] };

export default function project(state = initialState, action) {
    switch (action.type) {
        case projectActionTypes.PROJECT_CREATE_REQUEST:
            return state
        case projectActionTypes.PROJECT_CREATE_SUCCESS:
            console.log('entrou')
            console.log('action', action)
            console.log(state)
            const { projects } = state
            console.log('before', projects)
            projects.push(action.project)
            console.log('after', projects)
            return { projects }
        case projectActionTypes.PROJECT_CREATE_ERROR:
            return state
        default:
            return state
    }
}