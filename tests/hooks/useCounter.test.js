import { renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'
import { act } from 'react'

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

  test('Debe de incrementar el counter', () => {
    const { result } = renderHook(() => useCounter(100))
    const { increment } = result.current

    act(() => {
      increment(1)
      increment(2)
    })

    expect(result.current.counter).toBe(103)
  })

  test('Debe de decrementar el counter', () => {
    const { result } = renderHook(() => useCounter(100))
    const { decrement } = result.current

    act(() => {
      decrement(1)
      decrement(2)
    })

    expect(result.current.counter).toBe(97)
  })

  test('Debe de resetear el counter', () => {
    const { result } = renderHook(() => useCounter(100))
    const { increment, reset } = result.current

    act(() => {
      increment(1)
      reset()
    })

    expect(result.current.counter).toBe(100)
  })
})
