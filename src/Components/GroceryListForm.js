import React from 'react'
import { FaCheck } from 'react-icons/fa'

const GroceryListForm = ({
  addNewItem,
  groceryList,
  setGroceryList,
  setNewGroceryList,
  newGroceryList
}) => {
  return(
    <>
      <form className='form-control' >
        <div className='container'>
          <label>QTDE </label>
          <input
            className='groceryList__input groceryList__description'
            type='number'
            value={newGroceryList.qtde}
            onChange={(e) => setNewGroceryList({ ...newGroceryList, qtde: e.target.value })}
          />
          <label>R$ </label>
          <input
            className='groceryList__input groceryList__description'
            type='number'
            placeholder='0,00'
            value={newGroceryList.preco}
            onChange={(e) => setNewGroceryList({ ...newGroceryList, preco: e.target.value })}
            required
          />
          <input
            className='groceryList__input groceryList__description'
            type='checkbox'
            value={newGroceryList.desc}
            onChange={(e) => setNewGroceryList({ ...newGroceryList, desc: e.target.value })}
          />
        </div>
        <input
          className='groceryList__input'
          autofocus
          type='text'
          id='Adicionar'
          placeholder='Adicionar item'
          value={newGroceryList.item}
          onChange={(e) => setNewGroceryList({ ...newGroceryList, item: e.target.value })}
          required
        />
        <button className='groceryList__btn' onClick={(e) => addNewItem(e)}>
          <FaCheck style={{ margin: '-4px 10px', fontSize: '30px' }} />
        </button>
      </form>
    </>
  )
}

export default GroceryListForm
