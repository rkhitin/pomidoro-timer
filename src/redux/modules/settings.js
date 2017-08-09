// @flow
const actionTypes = {
  SET_WORK_DURATION: 'SET_WORK_DURATION',
  SET_SMALL_BREAK_DURATION: 'SET_SMALL_BREAK_DURATION',
  SET_BIG_BREAK_DURATION: 'SET_BIG_BREAK_DURATION',
  SET_POMIDORO_IN_ROUND: 'SET_POMIDORO_IN_ROUND',
  SET_TARGET_NUMBER_OF_POMIDORO: 'SET_TARGET_NUMBER_OF_POMIDORO',
}

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

export function setSmallBreakDuration(value: number): Action {
  return {
    type: actionTypes.SET_SMALL_BREAK_DURATION,
    value,
  }
}

export function setBigBreakDuration(value: number): Action {
  return {
    type: actionTypes.SET_BIG_BREAK_DURATION,
    value,
  }
}

export function setPomidoroInRound(value: number): Action {
  return {
    type: actionTypes.SET_POMIDORO_IN_ROUND,
    value,
  }
}

export function setTargetNumberOfPomidoro(value: number): Action {
  return {
    type: actionTypes.SET_TARGET_NUMBER_OF_POMIDORO,
    value,
  }
}

// Reducer

const initialState: Settings = {
  intervalDurationsInMin: {
    work: 25,
    smallBreak: 5,
    bigBreak: 30,
  },
  pomidoroInRound: 4,
  targetNumberOfPomidoro: 10,
}

export default function reducer(
  state: Settings = initialState,
  action: Action
): Settings {
  switch (action.type) {
    case actionTypes.SET_WORK_DURATION:
      return Object.assign({}, state, {
        durations: Object.assign({}, state.intervalDurationsInMin, {
          work: action.value,
        }),
      })

    case actionTypes.SET_SMALL_BREAK_DURATION:
      return Object.assign({}, state, {
        durations: Object.assign({}, state.intervalDurationsInMin, {
          smallBreak: action.value,
        }),
      })

    case actionTypes.SET_BIG_BREAK_DURATION:
      return Object.assign({}, state, {
        durations: Object.assign({}, state.intervalDurationsInMin, {
          bigBreak: action.value,
        }),
      })

    case actionTypes.SET_POMIDORO_IN_ROUND:
      return Object.assign({}, state, {
        pomidoroInRound: action.value,
      })

    case actionTypes.SET_TARGET_NUMBER_OF_POMIDORO:
      return Object.assign({}, state, {
        targetNumberOfPomidoro: action.value,
      })

    default:
      return state
  }
}
