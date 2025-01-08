import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'
import { use } from 'react'
import { useEffect } from 'react'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

const initialState = []

export const TodoApp = () => {
  const [todos, dispacthTodo] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handlenewTodo = (newTodo) => {
    dispacthTodo({
      type: 'add',
      payload: newTodo,
    })
  }

  const handleDelete = (todoId) => {
    dispacthTodo({
      type: 'delete',
      payload: todoId,
    })
  }

  const handleToggle = (todoId) => {
    dispacthTodo({
      type: 'toggle',
      payload: todoId,
    })
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
          <TodoList
            todos={todos}
            onDeleteTodo={handleDelete}
            onToggleTodo={handleToggle}
          />
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
