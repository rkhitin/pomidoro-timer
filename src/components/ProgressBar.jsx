// @flow
import React from 'react'
import glamorous from 'glamorous'

const Bar = glamorous.div({
  width: '100%',
  border: '1px solid grey',
  height: '30px',
  display: 'flex',
})

const Interval = glamorous.div({
  display: 'flex',
})

const PassedBackground = glamorous.div({})

const ProgressBar = ({ scheme }: { scheme: Array<any> }) =>
  <Bar className={'js--progress-bar'}>
    {scheme.map((s, i) =>
      <Interval
        key={`interval-${i}`}
        css={{
          backgroundColor: s.interval.color,
          width: s.interval.width,
        }}
      >
        <PassedBackground
          css={{
            backgroundColor: s.background.color,
            width: s.background.width,
          }}
        />
      </Interval>
    )}
  </Bar>

export default ProgressBar
