// @flow
import React from 'react'
import { connect } from 'react-redux'

import progressBarSchemeGenerator from '../utils/progressBarSchemeGenerator'
import ProgressBar from '../components/ProgressBar'

const ProgressBarContainer = ({
  timer,
  settings,
}: {
  timer: TimerStateType,
  settings: SettingsStateType,
}) => {
  const progressBarScheme: Array<
    IntervalSchemeType
  > = progressBarSchemeGenerator(
    timer.counter,
    timer.spentTimeCounter,
    settings
  )

  return <ProgressBar scheme={progressBarScheme} />
}

function mapStateToProps(state) {
  return {
    timer: state.timer,
    settings: state.settings,
  }
}

export default connect(mapStateToProps)(ProgressBarContainer)
