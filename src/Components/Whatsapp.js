import React, { useState } from 'react'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import './Whatsapp.css'

const Whatsapp = () => {

  const [showModal, setShowModal] = useState(false);

  const openCloseModal = () => {
    setShowModal(!showModal);
  }

  return(
    <div className='app__container'>
      {
        // Modal
        showModal &&
        <div className='modalBackground'>
          <div className='modalContainer'>
            <div className='modalCloseBtn'>
              <button onClick={() => openCloseModal()}>
                X
              </button>
            </div>
            <div className='modalTitle'>
              Chat - Tire dúvidas
            </div>
            <div className='modalBody'>
              <textarea cols='50' rows='20' />
            </div>
            <div className='modalFooter'>
              <small> copyright &copy; 2022</small>
            </div>
          </div>
        </div>
      }
      {/*button whatsapp*/}
      <button
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          backgroundColor: 'whitesmoke',
          border: '5px solid lime',
          borderRadius: '50%',
          outline: 'none',
          boxShadow: 'rgba(23, 1, 34, .8)',
          padding: '15px',
          margin: '0px',
          cursor: 'pointer',
        }}
        onClick={() => openCloseModal()}
      >
      <FaWhatsapp
        style={{
          color: 'lime',
          fontSize: '5em',
          borderRadius: '50%',
        }}
      />
      </button>
    </div>
  )
}

export default Whatsapp;
