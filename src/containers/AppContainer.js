// @flow
import React from 'react'
import { connect } from 'react-redux'

import { init } from '../redux/modules/timer'
import timeConverter from '../utils/timeConverter'
import { getPermission } from "../utils/notifications"
import App from '../components/App'

class AppContainer extends React.Component {
  componentWillMount() {
    getPermission()
    this.props.initTimer()
  }

  render() {
    const { timer } = this.props

    return <App timer={timer} />
  }
}

function mapStateToProps(state) {
  return {
    timer: timeConverter(state.timer.restOfIntervalInSec),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initTimer: () => dispatch(init()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
