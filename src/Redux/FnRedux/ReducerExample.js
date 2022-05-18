import actionSelect from './ActionExampleSelect'
import actionVehicle from './ActionExampleVehicle'

const initialStateSelect = {
  select: ''
}

export function ReducerChooseService(state = initialStateSelect, action) {
  switch(action.type) {
    case actionSelect.select1:
      return { select: 'Selecione um item' }
    case actionSelect.select2:
      return { select: 'Funilaria e Pintura' }
    case actionSelect.select3:
      return { select: 'Troca de Óleo' }
    case actionSelect.select4:
      return { select: 'Manutenção Preventiva' }
      break;
    default:
      return { select: 'Selecione um item' }
  }
}

const initialStateVehicle = {
  vehicle: ''
}

export function ReducerChooseVehicle(state = initialStateVehicle, action) {
  switch(action.type) {
    case actionVehicle.car:
      return { vehicle: 'CARRO É MELHOR' }
    case actionVehicle.bike:
      return { vehicle: 'BIKE É MELHOR' }
    default:
      return { vehicle: 'Escolha o Veiculo' }
  }
}

// export default ReducerExampleVehicle
