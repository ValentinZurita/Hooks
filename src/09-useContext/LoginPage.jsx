import React from 'react'
import { useContext } from 'react'
import { UserContext } from './Context/userContext'

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <div>LoginPage</div>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 1, name: 'valentin', emai: 'valentin@email.com' })
        }
      >
        Set User
      </button>
    </>
  )
}
