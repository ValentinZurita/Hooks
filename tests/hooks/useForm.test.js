import { renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'
import { act } from 'react'

describe('Pruebas del useForm', () => {
  const initialForm = {
    name: 'Valentin',
    email: 'valentin.alejandro“@gmail.com',
  }

  test('Debe de regresar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm))
    expect(result.current.formState).toEqual({
      name: initialForm.name,
      email: initialForm.email,
    })
  })

  test('Debe de cambiar el valor del formulario (cambiar name)', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange } = result.current

    const newName = 'Alejandro'
    act(() => {
      onInputChange({ target: { name: 'name', value: newName } })
    })

    expect(result.current.formState).toEqual({
      ...initialForm,
      name: newName,
    })
  })

  test('Debe limpiar el formulario', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const { onCleanForm, onInputChange } = result.current

    act(() => {
      onInputChange({ target: { name: 'name', value: 'Tu Culo' } })
      onCleanForm()
    })

    expect(result.current.formState).toEqual(initialForm)
  })
})
