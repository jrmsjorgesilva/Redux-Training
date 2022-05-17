//BIBLIOTECA PRINCIPAL IMPORT
import React, { useState } from 'react'
// BIBLIOTECAS AUXILIARES IMPORT

// Actions contant declaration
const INCREMENT_VALOR = 'INCREMENT_VALOR';
const DECREMENT_VALOR = 'DECREMENT_VALOR';
const CLEAN_VALOR = 'CLEAN_VALOR';

//Reducer
const initialState = {
  count: 0
}

export default function Reducer (state = initialState, action) {
  //
  switch (action.type) {
    case INCREMENT_VALOR:
      return { count: state.count + action.payload }
      break;
    case DECREMENT_VALOR:
      return { count: state.count - action.payload }
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
