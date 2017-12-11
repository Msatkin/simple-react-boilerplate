import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
    switch(action.type) {
        
        default: 
            return state;
    }
}