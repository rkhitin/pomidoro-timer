// @flow
const actionTypes = {}

type ActionType = $Keys<typeof actionTypes>
type Action = {
  type: ActionType,
  value: number,
}

// Action Creators

export function setWorkDuration(value: number): Action {
  return {
    type: actionTypes.SET_WORK_DURATION,
    value,
  }
}

// Reducer

const initialState: HistoryState = []

export default function reducer(
  state: HistoryState = initialState,
  action: Action
): HistoryState {
  switch (action.type) {
    default:
      return state
  }
}
