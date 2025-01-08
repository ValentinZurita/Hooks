import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'
import { useEffect } from 'react'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

const initialState = []

export const useTodos = () => {
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

  return {
    handleDelete,
    handleToggle,
    handlenewTodo,
    todos,
    todosCounts: todos.length,
    todosCompleted: todos.filter((todo) => todo.done).length,
  }
}
