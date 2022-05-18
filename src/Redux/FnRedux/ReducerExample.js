import actionTypes from './ActionExample'

const initialState = {
  select: 'Selecione um item'
}

function ReducerExample(state = initialState, action) {
  switch(action.type) {
    case actionTypes.select1:
      return { select: 'Selecione um item lalalalallallallalll' }
    case actionTypes.select2:
      return { select: 'Funilaria e Pintura lalalalallallallalll' }
    case actionTypes.select3:
      return { select: 'Troca de Óleo lalalalallallallalll' }
    case actionTypes.select4:
      return { select: 'Manutenção Preventiva lalalalallallallalll' }
      break;
    default:
      return { select: 'Selecione um item lalalalallallallalll' }
  }
}

// const initialState = {
//   vehicle: 'Escolha o Veiculo'
// }
//
// function ReducerExample(state = initialState, action) {
//   switch(action.type) {
//     case actionTypes.car:
//       return { vehicle: 'CARRO É MELHOR' }
//     case actionTypes.bike:
//       return { vehicle: 'BIKE É MELHOR' }
//     default:
//       return { vehicle: 'Escolha o Veiculo' }
//   }
// }

export default ReducerExample
