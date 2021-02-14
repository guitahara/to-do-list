import { authActionTypes } from '../action-types/index';
import { history } from '../../helpers/index';
import { authService } from '../../services/index'

function login(username, password, from) {
    function loginRequest(user) { return { type: authActionTypes.LOGIN_REQUEST, user } }
    function loginSuccess(user) { return { type: authActionTypes.LOGIN_SUCCESS, user } }
    function loginError(error) { return { type: authActionTypes.LOGIN_ERROR, error } }
    return async dispatch => {
        try {
            dispatch(loginRequest({ username, password }));
            const { token, ...user } = await authService.login({ username, password })
            localStorage.setItem('token', token)
            dispatch(loginSuccess(user));
            history.push(from);
        } catch (error) {
            dispatch(loginError(error));
        }
    };
}

function logout() {
    function logoutRequest() { return { type: authActionTypes.LOGOUT_REQUEST } }
    function logoutSuccess() { return { type: authActionTypes.LOGOUT_SUCCESS } }
    function logoutError(error) { return { type: authActionTypes.LOGOUT_ERROR, error } }
    return dispatch => {
        try {
            dispatch(logoutRequest())
            authService.logout()
            dispatch(logoutSuccess)
        } catch (error) {
            dispatch(logoutError(error))
        }
    }
}

export const authActions = {
    login,
    logout
}