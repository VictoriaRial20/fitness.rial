import { applyMiddleware, combineReducers, createStore } from 'redux';
import { authReducer, muscleReducer, zoneReducer } from './reducers';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    muscle: muscleReducer,
    zone: zoneReducer,
    auth: authReducer,
});

export  default createStore(rootReducer, applyMiddleware(thunk));