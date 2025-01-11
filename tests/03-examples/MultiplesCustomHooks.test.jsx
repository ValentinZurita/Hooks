import React from 'react'
import { render } from '@testing-library/react'
import { MultipleCutomHooks } from '../../src/03-examples/MultipleCutomHooks'

describe('Pruebas del componente MultiplesCustomHooks', () => {
  test('Debe hacer un snapshot', () => {
    const { asFragment } = render(<MultipleCutomHooks />)
    expect(asFragment()).toMatchSnapshot()
  })

  

})
