// Actions contant declaration
const INCREMENT_VALOR = 'INCREMENT_VALOR';
const DECREMENT_VALOR = 'DECREMENT_VALOR';
const CLEAN_VALOR = 'CLEAN_VALOR';

// Actions
const incrementAction = (value) => {
  return {
    type: INCREMENT_VALOR,
    payload: value
  }
}

const decrementAction = (value) => {
  return {
    type: DECREMENT_VALOR,
    payload: value
  }
}

const cleanAction = () => {
  return {
    type: CLEAN_VALOR
  }
}

export {
  incrementAction,
  decrementAction,
  cleanAction
}
