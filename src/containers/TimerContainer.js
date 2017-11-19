// @flow
import React from 'react'
import { connect } from 'react-redux'
import { start, next, pause, reset } from '../redux/modules/timer'
import { toggleCompleteness } from '../redux/modules/todo'
import timeConverter from '../utils/timeConverter'
import intervals from '../constants/intervals'
import Timer from '../pages/Timer'

const TimerContainer = props => {
  const formatedTimeCounter = timeConverter(props.restOfIntervalInSec)
  const progressBarWidth =
    props.restOfIntervalInSec /
    (props.intervalDurationsInMin[props.currentInterval] * 60)
  const isItWork = props.currentInterval === intervals.work

  return (
    <Timer
      {...props}
      formatedTimeCounter={formatedTimeCounter}
      progressBarWidth={progressBarWidth}
      isItWork={isItWork}
    />
  )
}

function mapStateToProps(state) {
  const currentTodo = state.todo.filter(td => !td.isCompleted)[0]

  return {
    restOfIntervalInSec: state.timer.restOfIntervalInSec,
    currentInterval: state.timer.currentInterval,
    intervalDurationsInMin: state.settings.intervalDurationsInMin,
    currentTodoId: currentTodo ? currentTodo.id : null,
    todos: state.todo,
    isItBreak: state.timer.currentInterval !== 'work',
  }
}

function mapDispatchToProps(dispatch) {
  return {
    start: () => dispatch(start()),
    pause: () => dispatch(pause()),
    next: () => dispatch(next()),
    reset: () => dispatch(reset()),
    toggleCompleteness: (todoId: string) =>
      dispatch(toggleCompleteness(todoId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer)
