export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('Action.type: ABC, Not yet implemented')

    default:
      return initialState
  }
}
