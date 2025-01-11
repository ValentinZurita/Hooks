import { todoReducer } from '../../src/08-useReducer/todoReducer'

describe('Pruebas en el todoReducer', () => {

  const initialState = [
    {
      id: 1,
      desc: 'Aprender React',
      done: false,
    },
  ]

  test('Debe de retornar el estado incial', () => {
    const state = todoReducer(initialState, {})
    expect(state).toEqual(initialState)
  })


  test('Debe de agregar un TODO', () => {

    const newTodo = {
      id: 2,
      desc: 'Aprender Mongo',
      done: false,
    }

    const action = {
      type: 'add',
      payload: newTodo,
    }

    const state = todoReducer(initialState, action)
    expect(state).toEqual([...initialState, newTodo])
  })

  test('Debe de borrar un TODO', () => {

    const action = {
      type: 'delete',
      payload: 1,
    }

    const state = todoReducer(initialState, action)
    expect(state).toEqual([])
  })

  test('Debe de hacer el TOGGLE del TODO', () => {

    const action = {
      type: 'toggle',
      payload: 1,
    }

    const state = todoReducer(initialState, action)
    expect(state[0].done).toBe(true)
  })

})
