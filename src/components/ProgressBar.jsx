// @flow
import React from 'react'
import styled from '@emotion/styled'

import getIntervalColor from '../utils/getIntervalColor'

const Bar = styled.div({
  width: '100%',
  height: '30px',
  display: 'flex',
})

const Interval = styled.div`
  display: flex;
  width: ${({ width }) => width};
  background-color: ${({ type }) => getIntervalColor(type, true)};
`

const PassedBackground = styled.div`
  width: ${({ width }) => width};
  background-color: ${({ type }) => getIntervalColor(type, false)};
`

const ProgressBar = ({ scheme }: { scheme: Array<IntervalScheme> }) => {
  return (
    <Bar className={'js--progress-bar'}>
      {scheme.map((s, i) => (
        <Interval key={`interval-${i}`} width={s.width} type={s.type}>
          <PassedBackground width={s.activeWidth} type={s.type} />
        </Interval>
      ))}
    </Bar>
  )
}

export default ProgressBar
