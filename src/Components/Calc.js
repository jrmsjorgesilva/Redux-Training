//BIBLIOTECA PRINCIPAL IMPORT
import React, { useState } from 'react'
// CSS IMPORTS
import './Calc.css'
// BIBLIOTECAS AUXILIARES IMPORT
import { FaEnvelope, FaCheck } from 'react-icons/fa'

// COMPONENTE
const Calc = () => {

  // GERENCIAMENTO DE ESTADO VIA REDUX

  const [mail, setMail] = useState('seumelhor@email.com.br');
  const [mailSend, setMailSend] = useState(false);

  const typeMail = (e) => {
    // printMail(e.target.value);
    setMail(mail => e.target.value);
  }

  const printMail = (value) => {
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
        {mailSend && <FaCheck style={{ color: 'lime', fontSize: '45px' }} />}
      </h3>
      {mailSend && <small style={{ color: 'lime' }}>Email enviado com sucesso</small>}
    </div>
  );
}

export default Calc
