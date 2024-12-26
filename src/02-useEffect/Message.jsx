import React from 'react'
import { use } from 'react'

export const Message = () => {
  useEffect(() => {
    const onMouseMove = (e) => {
      const coors = { x: e.x, y: e.y }
      console.log(e)
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove) 
    }
  }, [])

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  )
}
