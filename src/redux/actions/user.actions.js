import { userActionTypes } from '../action-types/index';
import { history } from '../../helpers/index';
import { userService } from '../../services/index'

function register(registry, from) {
    function registerRequest() { return { type: userActionTypes.REGISTER_REQUEST } }
    function registerSuccess() { return { type: userActionTypes.REGISTER_SUCCESS } }
    function registerError(error) { return { type: userActionTypes.REGISTER_ERROR, error } }
    return async dispatch => {
        try {
            dispatch(registerRequest());
            await userService.register({
                userName: registry.username,
                name: registry.name,
                password: registry.password
            })
            dispatch(registerSuccess());
            history.push(from);
        } catch (error) {
            dispatch(registerError(error));
        }
    };
}

export const userActions = {
    register
}