import loggedReducer from './isLogged'
import {combineReducers} from 'redux';
import updateReducer from './updateUser';
import { updateProfile } from '../actions';

const allReducers = combineReducers({
    isLogged: loggedReducer,
    userName: updateReducer,
    profile: updateProfile
});

export default allReducers;