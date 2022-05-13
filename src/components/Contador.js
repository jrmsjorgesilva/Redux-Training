//BIBLIOTECA PRINCIPAL IMPORT
import React, { useState } from 'react'
// CSS IMPORTS
import './Contador.css'
// BIBLIOTECAS AUXILIARES IMPORT
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'

// COMPONENTE
const Contador = () => {

  // state
  const [valor, setValor] = useState(0);

  const incrementaValor = () => {
    setValor(valor + 1);
  }

  const decrementaValor = () => {
    setValor(valor - 1);
  }

  const limpaValor = () => {
    setValor(0);
  }

  return (
    <div className="contador__container">
      <h1 class='contador__link'>Contandu SA</h1>
      <button className='contador__btn' onClick={() => incrementaValor()}>
        Incrementar
        <FaPlus />
      </button>
      <button className='contador__btn' onClick={() => decrementaValor()}>
        Decrementar
        <FaMinus />
      </button>
      <h3>
        <FaTrash style={{ color: 'firebrick', margin: '-2px 10px', cursor: 'pointer' }} onClick={() => limpaValor()} />
        Valor: {valor}
      </h3>
    </div>
  );
}

export default Contador;
