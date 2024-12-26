import React from 'react'
import { use } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
  })

  const { username, email } = formState

  const onInpuntChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  useEffect(() => {
    console.log('Hey')
  }, [])

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInpuntChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInpuntChange}
      />

      {username === '123' && <Message />}
    </>
  )
}
