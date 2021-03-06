//BIBLIOTECA PRINCIPAL IMPORT
import React, { useState } from 'react'
// CSS IMPORTS
import './Contador.css'
// BIBLIOTECAS AUXILIARES IMPORT
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'
import { connect } from 'react-redux'
import { incrementAction, decrementAction, cleanAction } from '../Redux/Actions'

// COMPONENTE
const Contador = (props) => {

  // state
  // const [valor, setValor] = useState(0);
  //
  // const incrementaValor = () => {
  //   setValor(valor => valor + 1);
  // }
  //
  // const decrementaValor = () => {
  //   setValor(valor => valor - 1);
  // }
  //
  // const limpaValor = () => {
  //   setValor(valor => valor * 0);
  // }

  // GERENCIAMENTO DE ESTADO VIA REDUX

  const incrementaValor = () => {
    props.dispatch(incrementAction(5));
  }

  const decrementaValor = () => {
    props.dispatch(decrementAction(5));
  }

  const limpaValor = () => {
    props.dispatch(cleanAction());
  }

  return (
    <div className="contador__container">
      <h1 class='contador__link'>Contandu SA</h1>
      <button className='contador__btn' onClick={() => incrementaValor()}>
        Incrementar
        <FaPlus style={{ margin: '0px 10px', fontSize: '26px', fonWeight: 'bolder' }} />
      </button>
      <button className='contador__btn' onClick={() => decrementaValor()}>
        Decrementar
        <FaMinus style={{ margin: '0px 10px', fontSize: '26px', fonWeight: 'bolder' }} />
      </button>
      <h3>
        <FaTrash style={{ color: 'firebrick', margin: '-2px 10px', cursor: 'pointer' }} onClick={() => limpaValor()} />
        Valor: {props.count}
      </h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.count)
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Contador);
