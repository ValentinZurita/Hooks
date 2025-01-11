import React from 'react'
import { useContext } from 'react'
import { UserContext } from './Context/userContext'

export const HomePage = () => {
  const { user } = useContext(UserContext)

  return (
    <>
      <div>HomePage</div>

      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  )
}
