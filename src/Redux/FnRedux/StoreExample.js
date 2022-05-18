import { combineReducers, createStore } from 'redux'
import { ReducerChooseService, ReducerChooseVehicle } from './ReducerExample'

// combined reducers
const reducers = combineReducers({ ReducerChooseService, ReducerChooseVehicle });

// store do redux
const store = createStore(reducers);
// const store = createStore(CalcReducer);

export default store
