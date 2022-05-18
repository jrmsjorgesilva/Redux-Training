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
import ChooseService from './Redux/FnRedux/ChooseService'
import ChooseVehicle from './Redux/FnRedux/ChooseVehicle'
import store from './Redux/FnRedux/StoreExample'
// import store from './Redux/Store'


// COMPONENTE
const App = () => {
  return (
    <div className="App">
      <Provider store={store} >
        <Whatsapp />
        <ChooseService />
        <ChooseVehicle />
        <GroceryList />
        <Contador />
        <Calc />
        <ColorPicker />
      </Provider>
    </div>
  );
}

export default App;
