import React, { useState } from 'react'
import { FaColors } from 'react-icons/fa'

const ColorPicker = () => {

  const [color, setColor] = useState('red');

  const choosenColor = color;

  const verifyColor = (e) => {
    setColor(e.target.value);
  }

  return(
    <div className='app__container'>
      <div
        className='colorPanel'
        style={{
          backgroundColor: choosenColor,
          maxWidth: '300px',
          textAlign: 'center',
          margin: '0px auto',
          height: '150px'
        }}
      >
        COR
      </div>
      <input
        className='addColor app__input'
        type='text'
        placeholder='Qual sua cor favorita?'
        onChange={(e) => verifyColor(e)}
      />
    </div>
  )
}

export default ColorPicker;
