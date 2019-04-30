// @flow
import React from 'react'
import styled from '@emotion/styled'

import TimerCurrentTodo from '../components/TimerCurrentTodo'
import Timer from '../components/Timer'

const Content = styled.div({
  marginBottom: '45px',
})

const CurrentTodoWrapper = styled.div({
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
