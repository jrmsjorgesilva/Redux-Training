//BIBLIOTECA PRINCIPAL IMPORT
import React, { useState } from 'react'
// CSS IMPORTS
import './GroceryList.css'
// BIBLIOTECAS AUXILIARES IMPORT
import { FaPlus, FaCheck, FaTrash } from 'react-icons/fa'
import GroceryListItem from './GroceryListItem'

// COMPONENTE
const GroceryList = () => {

  const [groceryList, setGroceryList] = useState([
    {
      id: 1,
      item: 'Bananas',
      qtde: 2,
      preco: 4.3,
      desc: false
    },
    {
      id: 2,
      item: 'Beringela',
      qtde: 2,
      preco: 2.0,
      desc: true
    },
    {
      id: 3,
      item: 'Suco',
      qtde: 2,
      preco: 3.0,
      desc: false
    }
  ]);

  const [newGroceryList, setNewGroceryList] = useState('');

  const addNewItem = (e) => {
    e.preventDefault();
    // decalração -> gera novo id entre 10000 e 1 -> qtd -> preço -> desconto
    const newID = Math.floor(Math.random() * 10000);
    const newQTD = 5;
    const newPreco = 67.7;
    const newDesc = false;
    // copia array para exibição
    const newGroceryListObj = {
      id: newID,
      item: newGroceryList,
      qtde: newQTD,
      preco: newPreco,
      desc: newDesc
    };
    const newGroceryListArray = [...groceryList, newGroceryListObj];
    // seta novo estado para lista passando array atual junto com novo array
    setGroceryList(newGroceryListArray);
    // console.log(groceryList);
    // console.log({newID, newGroceryList, newQTD, newPreco, newDesc});
  }

  return (
    <div className="groceryList__container">
      <h1 className='groceryList__link'>Lista de Compras</h1>
      <form className='form-control' >
        <input
          className='groceryList__input'
          autofocus
          type='Adicionar'
          id='Adicionar'
          placeholder='adicionar'
          value={newGroceryList}
          onChange={(e) => setNewGroceryList(e.target.value)}
          required
        />
        <button className='groceryList__btn' onClick={(e) => addNewItem(e)}>
          <FaCheck style={{ margin: '-4px 10px', fontSize: '30px' }} />
        </button>
      </form>
      <ul>
        {
          groceryList.map(elem => <GroceryListItem elem={elem} />)
        }
      </ul>
    </div>
  );
}

export default GroceryList;
