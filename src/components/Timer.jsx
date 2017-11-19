// @flow
import React from 'react'
import glamorous from 'glamorous'
import Circle from './Circle'
import TimerControls from './TimerControls'
import timeConverter from '../utils/timeConverter'

const Watch = glamorous.div({
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  position: 'relative',

  '&>canvas': {
    width: '100%',
  },
})

const TimeCounter = glamorous.div({
  fontSize: '50px',
  textAlign: 'center',
  marginBottom: '10px',
})

const CircleContent = glamorous.div({
  position: 'absolute',
})

const Timer = ({
  formatedTimeCounter,
  start,
  next,
  pause,
  reset,
  progressBarWidth,
  isItWork,
}) => (
  <div>
    <Watch>
      <Circle progressBarWidth={progressBarWidth} isItWork={isItWork} />
      <CircleContent>
        <TimeCounter>{formatedTimeCounter}</TimeCounter>
        <TimerControls start={start} pause={pause} next={next} reset={reset} />
      </CircleContent>
    </Watch>
  </div>
)

export default Timer
