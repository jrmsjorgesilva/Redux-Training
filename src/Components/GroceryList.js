//BIBLIOTECA PRINCIPAL IMPORT
import React, { useState } from 'react'
// CSS IMPORTS
import './GroceryList.css'
// BIBLIOTECAS AUXILIARES IMPORT
import GroceryListItem from './GroceryListItem'
import GroceryListForm from './GroceryListForm'

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

  const [newGroceryList, setNewGroceryList] = useState({
    id: Math.floor(Math.random() * 10000),
    item: '',
    qtde: '',
    preco: '',
    desc: true
  });

  const addNewItem = (e) => {
    e.preventDefault();
    // seta um id aleatorio
    // setNewGroceryList({ id: Math.floor(Math.random() * 10000) });
    console.log(groceryList.id);
    // joga os dados novos juntamente com o arrray existente
    setGroceryList([...groceryList, newGroceryList]);
    // limpa formulario
    setNewGroceryList({
      id: Math.floor(Math.random() * 10000),
      item: '',
      qtde: 1,
      preco: 0,
      desc: true
    });
    // console.log(groceryList);
    // console.log(newGroceryList);
  }

  const deleteItem = (id) => {
    setGroceryList(groceryList.filter(elem => elem.id !== id));
  }

  return (
    <div className="groceryList__container">
      <h1 className='groceryList__link'>Lista de Compras</h1>
        <GroceryListForm
          addNewItem={addNewItem}
          groceryList={groceryList}
          setGroceryList={setGroceryList}
          newGroceryList={newGroceryList}
          setNewGroceryList={setNewGroceryList}
        />
        {groceryList.length > 0 ?
          <ul>
            {
              groceryList.map(elem => (
                <GroceryListItem
                  elem={elem}
                  deleteItem={deleteItem}
                  groceryList={groceryList}
                />
              ))
            }
          </ul>
          : 'Não há nada na lista'
        }
    </div>
  );
}

export default GroceryList;
