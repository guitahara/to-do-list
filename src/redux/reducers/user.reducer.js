import { userActionTypes } from '../action-types/index';

const initialState = {};

export default function user(state = initialState, action) {
    switch (action.type) {
        case userActionTypes.REGISTER_REQUEST:
            return state
        case userActionTypes.REGISTER_SUCCESS:
            return state
        case userActionTypes.REGISTER_ERROR:
            return state
        default:
            return state
    }
}