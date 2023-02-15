import { combineReducers, createStore } from 'redux';
import { muscleReducer, zoneReducer } from './reducers';

const rootReducer = combineReducers({
    muscle: muscleReducer,
    zone: zoneReducer,
});

export  default createStore(rootReducer);