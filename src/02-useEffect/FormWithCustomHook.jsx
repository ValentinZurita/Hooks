import React from 'react'
import { Message } from './Message'
import { useForm } from '../../src/hooks/useForm'

export const FormWithCustomHook = () => {
  const { formState, onInpuntChange, email, username, password, onCleanFormß } = useForm({
    username: '',
    email: '',
    password: '',
  })

  //const { username, email, password } = formState

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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInpuntChange}
      />

      {username === '123' && <Message />}

      <button className="btn btn-primary btn-sm mt-2" onClick={onCleanForm}>Borrar</button>
    </>
  )
}
