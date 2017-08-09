// @flow
import intervals from '../constants/intervals'

export default function getIntervalColor(
  type: Interval,
  isItBackground: boolean
): string {
  if (isItBackground) {
    switch (type) {
      case intervals.work:
        return '#b44'
      case intervals.smallBreak:
        return '#4b4'
      case intervals.bigBreak:
        return '#44b'
      default:
        return 'grey'
    }
  }

  switch (type) {
    case intervals.work:
      return '#f00'
    case intervals.smallBreak:
      return '#0f0'
    case intervals.bigBreak:
      return '#004'
    default:
      return 'black'
  }
}
