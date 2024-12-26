import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../hooks/useForm'

export const TodoForm = ({ onNewTodo }) => {
  const { description, onInputChange, onCleanForm } = useForm({
    description: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (description.trim().length <= 1) {
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    }

    onNewTodo(newTodo)
    onCleanForm()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        placeholder="Que hay que hacer?"
        autoComplete="off"
        className="form-control mt-3"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-3 btn-block">
        Agregar
      </button>
    </form>
  )
}

TodoForm.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
}
