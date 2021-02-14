import { authActionTypes } from '../action-types/index';

const user = localStorage.getItem('token')

const initialState = user ? { logged: true, user } : {};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case authActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                user: action.user
            }
        case authActionTypes.LOGIN_SUCCESS:
            return {
                logged: true,
                user: action.user
            }
        case authActionTypes.LOGIN_ERROR:
            return {}
        case authActionTypes.LOGOUT_REQUEST:
            return { ...state }
        case authActionTypes.LOGOUT_SUCCESS:
            return {}
        case authActionTypes.LOGOUT_ERROR:
            return { ...state }
        default:
            return state
    }
}