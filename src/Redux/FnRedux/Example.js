//BIBLIOTECA PRINCIPAL IMPORT
import React, { useState } from 'react'
// BIBLIOTECAS AUXILIARES IMPORT
import { incrementAction, decrementAction, cleanAction } from '../../Redux/Actions'
// IMPORTS DO REDUX
import { useSelector, useDispatch } from 'react-redux'

// COMPONENTE
const Example = () => {

  const [select, setSelect] = useState(() => 'Nenhum serviço selecionado');

  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  console.log("New redux state use selector", counter);

  return (
    <div className="app__container">
      {/*COMPONENTE EXAMPLE CAR -> BIKE*/}
      <div className='app__container'>
        <h1 className='app__link'>Escolha um serviço</h1>
        <button className='app__btn' style={{ margin: '20px'}} onClick={() => dispatch({ type: 'CAR' })}>Car</button>
        <span className='app__link'>{counter.select}</span>
        <button className='app__btn' style={{ margin: '20px'}} onClick={() => dispatch({ type: 'BIKE' })}>Bike</button>
      </div>
      {/*FIM DO COMPONENTE EXAMPLE CAR -> BIKE*/}
      <h1 className='app__link'>Escolha um veiculo</h1>
      <p>
        <small>* sujeito a disponibilidade</small>
      </p>
      <select
        className='app__input'
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value='Selecione um item' >Selecione um item</option>
        <option value='Funil' >Funilaria e Pintura</option>
        <option value='Oil' >Troca de Óleo</option>
        <option value='Prevent' >Manutenção Preventiva</option>
      </select>
      <p>
        <span className='app__link'>{select}</span>
      </p>
    </div>
  );
}

export default Example;
