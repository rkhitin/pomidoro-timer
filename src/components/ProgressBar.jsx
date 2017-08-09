// @flow
import React from 'react'
import glamorous from 'glamorous'

import getIntervalColor from '../utils/getIntervalColor'

const Bar = glamorous.div({
  width: '100%',
  border: '1px solid grey',
  height: '30px',
  display: 'flex',
})

const Interval = glamorous.div(
  {
    display: 'flex',
  },
  ({ width, type }) => ({
    width,
    backgroundColor: getIntervalColor(type, true),
  })
)

const PassedBackground = glamorous.div({}, ({ width, type }) => ({
  width,
  backgroundColor: getIntervalColor(type, false),
}))

const ProgressBar = ({ scheme }: { scheme: Array<IntervalScheme> }) =>
  <Bar className={'js--progress-bar'}>
    {scheme.map((s, i) =>
      <Interval key={`interval-${i}`} width={s.width} type={s.type}>
        <PassedBackground width={s.activeWidth} type={s.type} />
      </Interval>
    )}
  </Bar>

export default ProgressBar
