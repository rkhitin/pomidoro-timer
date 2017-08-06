// @flow
import React from 'react'

const Timer = ({
  timer,
  start,
  pause,
  next,
  reset,
}: {
  timer: number,
  start: () => mixed,
  pause: () => mixed,
  next: () => mixed,
  reset: () => mixed,
}) =>
  <div>
    <div>
      {timer}
    </div>
    <div>
      <button onClick={start}>start</button>
      <button onClick={pause}>pause</button>
      <button onClick={next}>next</button>
      <button onClick={reset}>reset</button>
    </div>
  </div>

export default Timer
