// @flow
const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  ADD_POMIDORO: 'ADD_POMIDORO',
}

// Action Creators

export function addTodo(todo) {
  return {
    type: actionTypes.ADD_TODO,
    todo,
  }
}

export function addPomidoro(todoId) {
  return {
    type: actionTypes.ADD_POMIDORO,
    todoId,
  }
}

// Reducer

const initialState: HistoryState = []

export default function reducer(state, action) {
  switch (action.type) {
    case: actionTypes.ADD_TODO: 
      return state.concat([
        Object.assign(action.todo, { pomidoroCounter: 0 })
      ])

    case: actionTypes.ADD_POMIDORO: 
      return state.map()

    default:
      return state
  }
}
