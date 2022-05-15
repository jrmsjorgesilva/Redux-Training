//BIBLIOTECA PRINCIPAL IMPORT
import React, { useState } from 'react'
// BIBLIOTECAS AUXILIARES IMPORT

// Actions contant declaration
const INCREMENT_VALOR = 'INCREMENT_VALOR';
const DECREMENT_VALOR = 'DECREMENT_VALOR';
const CLEAN_VALOR = 'CLEAN_VALOR';

// Actions
// const incrementAction = {
//   type: INCREMENT_VALOR
// }
//
// const decrementAction = {
//   type: DECREMENT_VALOR
// }
//
// const cleanAction = {
//   type: CLEAN_VALOR
// }

//Reducer

const initialState = {
  count: 0
}

export default function Reducer (state = initialState, action) {
  //
  switch (action.type) {
    case INCREMENT_VALOR:
      return { count: state.count + 1 }
      break;
    case DECREMENT_VALOR:
      return { count: state.count - 1 }
      break;
    case CLEAN_VALOR:
      return { count: state.count * 0 }
      break;
    default:
      return state
  }
}

// export default Reducer;

// Store
