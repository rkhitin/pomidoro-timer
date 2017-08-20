// @flow
import shortid from 'shortid'

const actionTypes = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  TOGGLE_COMPLETENESS: 'TOGGLE_COMPLETENESS',
}

type ActionType = $Keys<typeof actionTypes>
type Action = {
  type: ActionType,
  toDo?: ToDo,
  toDoId?: string,
}

// Action Creators

export function add(text: string): Action {
  const toDo = {
    id: shortid.generate(),
    text,
    isCompleted: false,
  }

  return {
    type: actionTypes.ADD,
    toDo,
  }
}

export function remove(toDoId: string): Action {
  return {
    type: actionTypes.ADD,
    toDoId,
  }
}

export function toggleCompleteness(toDoId: string): Action {
  return {
    type: actionTypes.TOGGLE_COMPLETENESS,
    toDoId,
  }
}

// Reducer

const initialState: ToDoState = []

export default function reducer(
  state: ToDoState = initialState,
  action: Action
): ToDoState {
  switch (action.type) {
    case actionTypes.ADD:
      const toDo = action.toDo || { text: 'Error', id: 'id', isComleted: false }
      return state.concat([toDo])

    default:
      return state
  }
}
