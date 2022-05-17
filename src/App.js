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
import { Provider } from 'react-redux'
import Example from './Redux/FnRedux/Example'
import store from './Redux/FnRedux/StoreExample'
// import store from './Redux/Store'


// COMPONENTE
const App = () => {
  return (
    <div className="App">
      <Provider store={store} >
        <Whatsapp />
        <Example />
        <GroceryList />
        <Contador />
        <Calc />
        <ColorPicker />
      </Provider>
    </div>
  );
}

export default App;
