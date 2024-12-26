const initialState = [
  {
    id: 1,
    todo: 'Recolectar piedras del infinito',
    done: false,
  },
]

const todoReducer = (state = initialState, action) => {
  if (action?.type === 'add') {
    return [...state, action.payload]
  }

  return state
}

const newTodo = {
  id: 2,
  todo: 'Juntar las 7 esferas del dragón',
  done: false,
}

const addTodoAction = {
  type: 'add',
  payload: newTodo,
}

let todos = todoReducer(initialState, addTodoAction)

console.log(todos)
