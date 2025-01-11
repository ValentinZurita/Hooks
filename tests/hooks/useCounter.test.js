import { renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'

describe('Pruebas del useCounter', () => {
  test('Debe de retornar valores por defecto', () => {
    const { result } = renderHook(() => useCounter())
    const { counter, increment, decrement, reset } = result.current

    expect(counter).toBe(1)
    expect(typeof increment).toBe('function')
    expect(typeof decrement).toBe('function')
    expect(typeof reset).toBe('function')
  })

  test('Debe de tener el counter en 100', () => {
    const { result } = renderHook(() => useCounter(100))
    expect(result.current.counter).toBe(100)
  })
})
