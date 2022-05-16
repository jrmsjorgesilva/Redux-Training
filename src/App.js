//BIBLIOTECA PRINCIPAL IMPORT
import React from 'react'
// CSS IMPORTS
import './App.css';
// BIBLIOTECAS AUXILIARES IMPORT
import Contador from './Components/Contador'
import Calc from './Components/Calc'
import GroceryList from './Components/GroceryList'
import Whatsapp from './Components/Whatsapp'
import ColorPicker from './Components/ColorPicker'
// IMPORTS DE RECURSOS DO REDUX
import { createStore } from 'redux'
import Reducer from './Redux/Reducer'
import CalcReducer from './Redux/CalcReducer'
import { Provider } from 'react-redux'

// store do redux
const store = createStore(Reducer);
// const store = createStore(CalcReducer);

// COMPONENTE
const App = () => {
  return (
    <div className="App">
      <Provider store={store} >
        <Whatsapp />
        <ColorPicker />
        <GroceryList />
        <Contador />
        <Calc />
      </Provider>
    </div>
  );
}

export default App;
