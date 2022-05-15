//BIBLIOTECA PRINCIPAL IMPORT
import React, { useState } from 'react'
// CSS IMPORTS
import './Calc.css'
// BIBLIOTECAS AUXILIARES IMPORT
import { FaEnvelope, FaCheck } from 'react-icons/fa'
import { connect } from 'react-redux'

// COMPONENTE
const Calc = () => {

  // GERENCIAMENTO DE ESTADO VIA REDUX
  const [mail, setMail] = useState('seumelhor@email.com.br');
  const [mailSend, setMailSend] = useState(false);

  const typeMail = (e) => {
    // printMail(e.target.value);
    setMail(mail => e.target.value);
  }

  const printMail = () => {
    if (mail === '' || mail === 'seumelhor@email.com.br') {
      return false
    }
    setMailSend(mailSend => !mailSend);
  }

  return (
    <div className="calc__container">
      <h1 class='calc__link'>Emailaria Online</h1>
      <input type='email' placeholder='Insira seu email' className='calc__input' onChange={(e) => typeMail(e)} />
      <button type='submit' className='calc__btn' onClick={() => printMail()}>
        Cadastrar
      </button>
      <h3>
        <FaEnvelope
          style={{ color: 'lime', marginBottom: '-4px', fontSize: '22px' }}
        /> {mail}
        {mailSend && <FaCheck style={{ color: 'lime', fontSize: '35px', margin: '-10px 10px' }} />}
      </h3>
      {mailSend && <small style={{ color: 'lime' }}>Email cadastrado com sucesso</small>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mailSend: false
  }
}

export default connect(mapStateToProps)(Calc);
