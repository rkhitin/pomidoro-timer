// @flow
import getNextInterval from '../../utils/getNextInterval'
import { notify } from "../../utils/notifications"
import intervals from '../../constants/intervals'

const actionTypes = {
  'SET_REST_OF_INTERVAL': 'SET_REST_OF_INTERVAL',
  'SET_TOTAL_SPENT_TIME': 'SET_TOTAL_SPENT_TIME',
  'SET_CURRENT_INTERVAL': 'SET_CURRENT_INTERVAL',
  'DECREMENT': 'DECREMENT',
}
type ActionType = $Keys<typeof actionTypes>

let intervalId = 0

// Action Creators

export function init(): (dispatch: () => any, getState: () => GlobalState) => void {
  return (dispatch: () => any, getState: () => GlobalState) => {
    const state = getState()
    const restOfInterval = state.settings.intervalDurationsInMin.work * 60

    dispatch(setRestOfInterval(restOfInterval))
  }
}

export function start(): any {
  return (dispatch: () => any, getState: () => GlobalState) => {
    if (intervalId !== 0) return

    intervalId = setInterval(() => {
      const state = getState()
      const { restOfIntervalInSec } = state.timer

      if (restOfIntervalInSec <= 0) return goToNextInterval(dispatch, state)

      dispatch(decrement())
    }, 1000)
  }
}

export function pause(): any {
  return (): void => {
    clearInterval(intervalId)
    intervalId = 0
  }
}

export function reset(): any {
  return (dispatch: () => void, getState: () => GlobalState) => {
    const state = getState()
    const { timer, settings } = state

    dispatch(setRestOfInterval(settings.intervalDurationsInMin[timer.currentInterval] * 60))
  }
}

export function next(): any {
  return (dispatch: () => void, getState: () => GlobalState) => {
    const state = getState()

    goToNextInterval(dispatch, state)
  }
}


function setRestOfInterval(restOfIntervalInSec: number): { type: ActionType, restOfIntervalInSec: number } {
  return {
    type: actionTypes.SET_REST_OF_INTERVAL,
    restOfIntervalInSec,
  }
}

function setTotalSpentTime(totalSpentTimeInMin: number): { type: ActionType, totalSpentTimeInMin: number } {
  return {
    type: actionTypes.SET_TOTAL_SPENT_TIME,
    totalSpentTimeInMin,
  }
}

function setCurrentInteval(currentInterval: Interval): { type: ActionType, currentInterval: Interval } {
  return {
    type: actionTypes.SET_CURRENT_INTERVAL,
    currentInterval,
  }
}

function decrement(): { type: ActionType } {
  return {
    type: actionTypes.DECREMENT
  }
}

function goToNextInterval(dispatch: () => void, state: GlobalState) {
  const { timer, settings } = state

  const nextInterval = getNextInterval(timer.currentInterval, timer.totalSpentTimeInMin, settings)
  const nextTotalSpentTimeInMin = state.timer.totalSpentTimeInMin + settings.intervalDurationsInMin[timer.currentInterval]

  notify(nextInterval)

  dispatch(setTotalSpentTime(nextTotalSpentTimeInMin))
  dispatch(setRestOfInterval(settings.intervalDurationsInMin[nextInterval] * 60))
  dispatch(setCurrentInteval(nextInterval))
}

// Reducer

const initialState: Timer = {
  currentInterval: intervals.work,
  totalSpentTimeInMin: 0,
  restOfIntervalInSec: 0,
}

export default function reducer(
  state: Timer = initialState,
  action: Object
): Timer {
  switch (action.type) {

    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        restOfIntervalInSec: state.restOfIntervalInSec - 1
      })

    case actionTypes.SET_TOTAL_SPENT_TIME:
      return Object.assign({}, state, {
        totalSpentTimeInMin: action.totalSpentTimeInMin,
      })

    case actionTypes.SET_REST_OF_INTERVAL:
      return Object.assign({}, state, {
        restOfIntervalInSec: action.restOfIntervalInSec,
      })

    case actionTypes.SET_CURRENT_INTERVAL:
      return Object.assign({}, state, {
        currentInterval: action.currentInterval,
      })

    default:
      return state
  }
}
