// Store

// initial state
const initialState = {
  mailSend: 'seumelhor@email.com.br'
}

// Reducer
const CalcReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIL_SEND:
      return { mailSend: true }
    case MAIL_NOT_SEND:
      return { mailSend: false }
      break;
    default:
      return state
  }
}

export default CalcReducer

//Actions declarations
const MAIL_SEND = 'MAIL_SEND';
const MAIL_NOT_SEND = 'MAIL_NOT_SEND';

//Actions
const actionMailSend = {
  type: MAIL_SEND
}

const actionMailNotSend = {
  type: MAIL_NOT_SEND
}
