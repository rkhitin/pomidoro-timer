// @flow
import { connect } from 'react-redux'

import { start, next, pause, reset } from '../redux/modules/timer'
import timeConverter from '../utils/timeConverter'
import Timer from '../pages/Timer'

function mapStateToProps(state) {
  return {
    timer: timeConverter(state.timer.restOfIntervalInSec),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    start: () => dispatch(start()),
    pause: () => dispatch(pause()),
    next: () => dispatch(next()),
    reset: () => dispatch(reset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
