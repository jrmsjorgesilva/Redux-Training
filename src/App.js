//BIBLIOTECA PRINCIPAL IMPORT
import React from 'react'
// CSS IMPORTS
import './App.css';
// BIBLIOTECAS AUXILIARES IMPORT
import Contador from './Components/Contador'
import { createStore } from 'redux'
import Reducer from './Redux/Reducer'
import { Provider } from 'react-redux'

// store do redux
const store = createStore(Reducer);

// COMPONENTE
const App = () => {
  return (
    <div className="App">
      <Provider store={store} >
        <Contador />
      </Provider>
    </div>
  );
}

export default App;
