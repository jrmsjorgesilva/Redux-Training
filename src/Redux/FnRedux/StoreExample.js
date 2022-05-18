import { combineReducers, createStore } from 'redux'
import { ReducerExample, ReducerExampleVehicle } from './ReducerExample'

// combined reducers
const reducers = combineReducers({ ReducerExampleVehicle, ReducerExample });

// store do redux
const store = createStore(reducers);
// const store = createStore(CalcReducer);

export default store
