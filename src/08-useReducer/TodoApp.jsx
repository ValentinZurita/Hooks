import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar piedras del infinito',
    done: false,
  },
  {
    id: new Date().getTime() + 1000,
    description: 'Juntar las 7 esferas del dragón',
    done: false,
  },
]

export const TodoApp = () => {
  const [todos, dispacthTodo] = useReducer(todoReducer, initialState)

  const handlenewTodo = (newTodo) => {
    console.log('newTodo', newTodo)
  }

  return (
    <>
      {/* Titulo de la APP */}
      <h1>TodoApp</h1>
      <hr />

      {/* Contenedor de la App tipo row */}

      <div className="row">
        {/* Lista de Todos */}
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        {/* Formulario para agregar nuevos Todos */}
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <TodoForm onNewTodo={handlenewTodo} />
        </div>
      </div>
    </>
  )
}
