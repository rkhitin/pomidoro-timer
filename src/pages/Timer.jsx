// @flow
import React from 'react'
import glamorous from 'glamorous'

import TimerCurrentTodo from '../components/TimerCurrentTodo'
import Timer from '../components/Timer'

const CurrentTodoWrapper = glamorous.div({
  width: '70%',
  margin: '0 auto',
})

const TimerPage = props => {
  return (
    <div>
      <Timer {...props} />

      <CurrentTodoWrapper>
        <TimerCurrentTodo {...props} />
      </CurrentTodoWrapper>
    </div>
  )
}

export default TimerPage
