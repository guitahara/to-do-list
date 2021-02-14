import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
    authReducer
});

export default rootReducer;

