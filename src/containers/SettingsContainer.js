// @flow
import React from 'react'
import { connect } from 'react-redux'

import {
  setBigBreakDuration,
  setSmallBreakDuration,
  setPomidoroInRound,
  setTargetNumberOfPomidoro,
  setWorkDuration,
} from '../redux/modules/settings'
import Settings from '../pages/Settings'

class SettingsContainer extends React.Component {
  work = {
    increase: () =>
       this.props.setWorkDuration(this.props.settings.durations.work + 1),
    decrease: () =>
      this.props.setWorkDuration(this.props.settings.durations.work - 1),
    set: event =>
      this.props.setWorkDuration(this._parseInput(event.target.value)),
  }

  render() {
    return <Settings
      settings={this.props.settings}
      actions={{
        work: this.work
      }}
    />
  }

  _parseInput(value) {
    const valueInt = parseInt(value)

    switch (true) {
      case (isNaN(valueInt)): return 0
      case (valueInt > 60): return 60
      case (valueInt < 0): return 0
      default: return 0
    }
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setWorkDuration: value => dispatch(setWorkDuration(value)),
    setSmallBreakDuration: value => dispatch(setSmallBreakDuration(value)),
    setBigBreakDuration: value => dispatch(setBigBreakDuration(value)),
    setPomidoroInRound: value => dispatch(setPomidoroInRound(value)),
    setTargetNumberOfPomidoro: value => dispatch(setTargetNumberOfPomidoro(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
