//BIBLIOTECA PRINCIPAL IMPORT
import React, { useState } from 'react'
// BIBLIOTECAS AUXILIARES IMPORT
import { FaTimes, FaEdit } from 'react-icons/fa'

// COMPONENTE
const GroceryListItem = ({ elem, deleteItem, groceryList }) => {
  return (
    <>
      <li key={elem}>
        {elem.item} - R$ {elem.preco}
        <FaEdit
          role='button'
          tabIndex='0'
          style={{ color: 'lime', margin: '0px 0px 0px 10px' }}
        />
        <FaTimes
          onClick={() => deleteItem(elem.id)}
          role='button'
          tabIndex='0'
          style={{ color: 'firebrick', margin: '0px 0px 0px 10px' }}
        />
      </li>
    </>
  );
}

export default GroceryListItem;
