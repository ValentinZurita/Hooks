import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
  const { counter, state, increment, decrement, reset } = useCounter()

  const value = 10

  return (
    <>
      <h1>Counter with Hook: {counter} </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(value)}>
        +{value}
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(value)}>
        -{value}
      </button>
    </>
  )
}
