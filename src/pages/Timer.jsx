// @flow
import React from 'react'
import glamorous from 'glamorous'

import TimerCurrentTodo from '../components/TimerCurrentTodo'
import Timer from '../components/Timer'

const Content = glamorous.div({
  marginBottom: '45px',
})

const CurrentTodoWrapper = glamorous.div({
  width: '70%',
  margin: '0 auto',
})

const TimerPage = props => {
  return (
    <Content>
      <Timer {...props} />

      <CurrentTodoWrapper>
        <TimerCurrentTodo {...props} />
      </CurrentTodoWrapper>
    </Content>
  )
}

export default TimerPage
