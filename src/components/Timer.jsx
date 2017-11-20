// @flow
import React from 'react'
import glamorous from 'glamorous'
import Circle from './Circle'
import TimerControls from './TimerControls'

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
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
        <div>
          <TimeCounter>{formatedTimeCounter}</TimeCounter>
          <TimerControls
            start={start}
            pause={pause}
            next={next}
            reset={reset}
          />
        </div>
      </CircleContent>
    </Watch>
  </div>
)

export default Timer
