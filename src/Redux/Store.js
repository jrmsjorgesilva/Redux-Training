import { createStore } from 'redux'
import Reducer from './Reducer'
import CalcReducer from './CalcReducer'

// store do redux
const store = createStore(Reducer);
// const store = createStore(CalcReducer);

export default store
