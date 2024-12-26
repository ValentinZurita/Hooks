import React from 'react'
import { useRef } from 'react'

export const FocuesScreen = () => {
  const inputRef = useRef()

  return (
    <>
      <h1>Focus Screen</h1>

      <input
        type="text"
        className="form-control mt-5"
        placeholder="Su nombre"
        ref={inputRef}
      />

      <button
        className="btn btn-outline-primary mt-5"
        onClick={() => {
          inputRef.current.select()
        }}
      >
        Focus
      </button>
    </>
  )
}
