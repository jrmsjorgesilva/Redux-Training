import React, { useState } from 'react'
import { FaColors } from 'react-icons/fa'

const ColorPicker = () => {

  const [color, setColor] = useState(() => 'red' );

  const choosenColor = color;

  const verifyColor = (e) => {
    setColor(e.target.value);
  }

  return(
    <div className='app__container'>
      <h1 className='app__link'>Colorize</h1>
      <div
        className='colorPanel'
        style={{
          backgroundColor: choosenColor,
          maxWidth: '300px',
          textAlign: 'center',
          margin: '0px auto',
          height: '150px',
          borderRadius: '3px',
          border: 'none',
          boxShadow: 'rgba(0, 0, 0, .4) 1px 2px 3px'

        }}
      >
        {color}
      </div>
      <input
        className='addColor app__input'
        type='text'
        style={{
          transform: 'translateY(-150%)'
        }}
        placeholder='Qual sua cor favorita?'
        onChange={(e) => verifyColor(e)}
      />
    </div>
  )
}

export default ColorPicker;
