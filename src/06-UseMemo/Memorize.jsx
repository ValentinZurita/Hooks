import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { useState } from 'react'

export const Memorize = () => {
  const { counter, increment, decrement, reset } = useCounter(10)
  const [show, setShow] = useState(true)

  return (
    <>
      <h1>Memorize</h1>
      <hr />

      <h2>
        Counter:
        <small>{counter}</small>
      </h2>

      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}
