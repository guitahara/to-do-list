import { authActionTypes } from '../action-types/index';
import { history } from '../../helpers/index';
import { authService } from '../../services/index';

function login(username, password, from) {
    function loginRequest(user) { return { type: authActionTypes.LOGIN_REQUEST, user } };
    function loginSuccess(user) { return { type: authActionTypes.LOGIN_SUCCESS, user } };
    function loginError(error) { return { type: authActionTypes.LOGIN_ERROR, error } };
    return async dispatch => {
        try {
            dispatch(loginRequest({ username, password }));
            const response = await authService.login(username, password);
            const { token, ...user } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('name', user.name)
            localStorage.setItem('username', user.userName)
            dispatch(loginSuccess(response.data));
            history.push(from);
        } catch (error) {
            dispatch(loginError(error));
        }
    };
};

function logout(from) {
    function logoutRequest() { return { type: authActionTypes.LOGOUT_REQUEST } };
    function logoutSuccess() { return { type: authActionTypes.LOGOUT_SUCCESS } };
    function logoutError(error) { return { type: authActionTypes.LOGOUT_ERROR, error } };
    return dispatch => {
        try {
            dispatch(logoutRequest());
            authService.logout();
            dispatch(logoutSuccess());
            history.push(from);
        } catch (error) {
            dispatch(logoutError(error));
        }
    }
};

export const authActions = {
    login,
    logout
}