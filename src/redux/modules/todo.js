// @flow
import shortid from 'shortid'

type AddAction = { type: 'ADD', todo: Todo }
type RemoveAction = { type: 'REMOVE', todoId: string }
type ToggleCompletenessAction = {
  type: 'TOGGLE_COMPLETENESS',
  todoId: string,
}
type ReorderAction = { type: 'REORDER', source: number, destination: number }

type Action =
  | RemoveAction
  | AddAction
  | ToggleCompletenessAction
  | ReorderAction

export function add(text: string): AddAction {
  const todo = {
    id: shortid.generate(),
    text,
    isCompleted: false,
  }

  return {
    type: 'ADD',
    todo,
  }
}

export function remove(todoId: string): RemoveAction {
  return {
    type: 'REMOVE',
    todoId: todoId,
  }
}

export function reorder(source: number, destination: number): ReorderAction {
  return {
    type: 'REORDER',
    source,
    destination,
  }
}

export function toggleCompleteness(todoId: string): ToggleCompletenessAction {
  return {
    type: 'TOGGLE_COMPLETENESS',
    todoId,
  }
}

// Reducer

const initialState: ToDoState = []

export default function reducer(
  state: ToDoState = initialState,
  action: Action
): ToDoState {
  switch (action.type) {
    case 'ADD':
      return [action.todo].concat(state)

    case 'REMOVE':
      return state.filter(existToDo => existToDo.id !== action.todoId)

    case 'REORDER':
      let result = Array.from(state)
      const [removed] = result.splice(action.source, 1)
      result.splice(action.destination, 0, removed)
      return result

    case 'TOGGLE_COMPLETENESS':
      return state.map(existToDo => {
        if (existToDo.id !== action.todoId) return existToDo

        return Object.assign({}, existToDo, {
          isCompleted: !existToDo.isCompleted,
        })
      })

    default:
      return state
  }
}
