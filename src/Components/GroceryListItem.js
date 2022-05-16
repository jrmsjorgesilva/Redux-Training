//BIBLIOTECA PRINCIPAL IMPORT
import React, { useState } from 'react'
// BIBLIOTECAS AUXILIARES IMPORT
import { FaTimes } from 'react-icons/fa'

// COMPONENTE
const GroceryListItem = ({ elem }) => {

  return (
    <>
      <li key={elem}>{elem.item} - R$ {elem.preco} <FaTimes role='button' tabIndex='0' style={{ color: 'firebrick' }} /></li>
    </>
  );
}

export default GroceryListItem;
