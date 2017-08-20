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
  set = (field: string, rawValue: string | number) => {
    const value = this._parseInput(rawValue)
    const actionCreator = this.props[`set${field}`]

    actionCreator(value)
  };

  render() {
    return <Settings settings={this.props.settings} set={this.set} />
  }

  _parseInput(value: string | number): number {
    const valueInt = parseInt(value, 10)

    switch (true) {
      case valueInt > 60:
        return 60
      case valueInt <= 0:
      case isNaN(valueInt):
        return 1
      default:
        return valueInt
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
    setTargetNumberOfPomidoro: value =>
      dispatch(setTargetNumberOfPomidoro(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
