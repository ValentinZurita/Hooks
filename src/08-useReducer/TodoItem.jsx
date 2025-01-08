import React from 'react'
import PropTypes from 'prop-types'

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between ">
      <span
        className={`text-muted align-self-center ${todo.done && 'text-decoration-line-through'}`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onDeleteTodo: PropTypes.func,
  onToggleTodo: PropTypes.func,
}
