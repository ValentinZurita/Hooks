import { useState } from 'react'

export const useCounter = (initialState = 1) => {
  const [counter, setCounter] = useState(initialState)

  const increment = (value) => {
    setCounter( prevCounter => prevCounter + value)
  }

  const decrement = (value) => {
    setCounter( prevCounter => prevCounter - value)
  }

  const reset = () => {
    setCounter(initialState)
  }

  return {
    counter,
    increment,
    decrement,
    reset,
  }
}
