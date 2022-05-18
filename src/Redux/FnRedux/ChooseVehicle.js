//BIBLIOTECA PRINCIPAL IMPORT
import React, { useState } from 'react'
// BIBLIOTECAS AUXILIARES IMPORT
// import { incrementAction, decrementAction, cleanAction } from '../../Redux/Actions'
// IMPORTS DO REDUX
import { useSelector, useDispatch } from 'react-redux'


const ChooseVehicle = () => {

  const chooseVehicle = useSelector(state => state);
  console.log("New chooseVehicle state use chooseVehicle", chooseVehicle);

  const dispatch = useDispatch();

  return(
    <div className='app__container'>
      {/*COMPONENTE EXAMPLE CAR -> BIKE*/}
        <h1 className='app__link'>Escolha um veiculo</h1>
        <button className='app__btn' style={{ margin: '20px'}} onClick={() => dispatch({ type: 'CAR' })}>Car</button>
        <span className='app__link'>{chooseVehicle.ReducerChooseVehicle.vehicle}</span>
        <button className='app__btn' style={{ margin: '20px'}} onClick={() => dispatch({ type: 'BIKE' })}>Bike</button>
      {/*FIM DO COMPONENTE EXAMPLE CAR -> BIKE*/}
    </div>
  )

}


export default ChooseVehicle;
