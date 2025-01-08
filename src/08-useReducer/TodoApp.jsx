import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'
import { use } from 'react'
import { useEffect } from 'react'
import { useTodos } from '../hooks/useTodos'

export const TodoApp = () => {
  const {
    handleDelete,
    handleToggle,
    handlenewTodo,
    todos,
    todosCompleted,
    todosCounts,
  } = useTodos()

  return (
    <>
      {/* Titulo de la APP */}
      <h1>TodoApp</h1>
      <h2>Total: {todosCounts}</h2>
      <h2>Completed: {todosCompleted}</h2>
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
