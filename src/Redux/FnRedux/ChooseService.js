//BIBLIOTECA PRINCIPAL IMPORT
import React, { useState } from 'react'
// BIBLIOTECAS AUXILIARES IMPORT
// import { incrementAction, decrementAction, cleanAction } from '../../Redux/Actions'
// IMPORTS DO REDUX
import { useSelector, useDispatch } from 'react-redux'

// COMPONENTE
const ChooseService = () => {

  // const [select, setSelect] = useState(() => 'Nenhum serviço selecionado');

  // Use selector para variavel redux
  const chooseService = useSelector(state => state);
  console.log("New chooseService state use chooseService", chooseService);

  // Use selector para variavel select
  // const select = useSelector(state => state);
  // console.log("New chooseService state use selector", select);

  // variavel que guarda valor da função dispatch que aciona reducer
  const dispatch = useDispatch();
    console.log("New dispatch", dispatch);

  return (
    <div className="app__container">
      <h1 className='app__link'>Escolha um serviço</h1>
      <p>
        <small>* sujeito a disponibilidade</small>
      </p>
      <select
        className='app__input'
        value={chooseService.ReducerChooseService.select}
        onChange={(e) => dispatch({ type: e.target.value })}
      >
        <option value='SELECT_1' >Selecione um item</option>
        <option value='SELECT_2' >Funilaria e Pintura</option>
        <option value='SELECT_3' >Troca de Óleo</option>
        <option value='SELECT_4' >Manutenção Preventiva</option>
      </select>
      <p>
        <span className='app__link'>{chooseService.ReducerChooseService.select}</span>
      </p>
    </div>
  );
}

export default ChooseService;
