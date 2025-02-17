import React, { useState } from 'react'

export const CounterApp = () => {
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  })

  const handleCounter1 = () => {
    setCounter((counter) => ({
      ...counter,
      counter1: counter1 + 1,
    }))
  }

  return (
    <>
      <h1>CounterApp: {counter1}</h1>
      <h1>CounterApp: {counter2}</h1>
      <h1>CounterApp: {counter3}</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleCounter1}>
        +1
      </button>
    </>
  )
}
