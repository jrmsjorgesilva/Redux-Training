// action

const addTodoAction = {
  type: 'CREATE',
  payload: 'A new post for Redux'
}

// Initial State do reducer
const initialState = {
  posts: []
}

//reducer
const reducer = (state = initialState, action) => {
  if (action.type === 'CREATE') {
    return state + 1;
  }
  return state;
}

// Store
const Store = createStore(reducer);

export default Store;
