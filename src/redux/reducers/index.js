import { combineReducers } from 'redux';
import authReducer from './reducer.auth';
import forgotPwdReducer from './reducer.forgotPwd';
import resetPwdReducer from './reducer.resetPwd';
import newCoachReducer from './reducer.newCoach';
import getUsersReducer from './reducer.getUsers';
import getCoachesReducer from './reducer.getCoaches';
import approveApplicationReducer from './reducer.ApproveApplication';
import addContentReducer from './reducer.addContent';

const rootReducer = combineReducers({
    authReducer,
    forgotPwdReducer,
    resetPwdReducer,
    newCoachReducer,
    getUsersReducer,
    getCoachesReducer,
    approveApplicationReducer,
    addContentReducer,
});

export default rootReducer;
