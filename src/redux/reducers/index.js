import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import projectReducer from './project.reducer';

const rootReducer = combineReducers({
    authReducer,
    userReducer,
    projectReducer
});

export default rootReducer;

