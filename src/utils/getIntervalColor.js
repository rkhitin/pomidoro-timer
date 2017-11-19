// @flow
import intervals from '../constants/intervals'
import colors from '../constants/colors'

export default function getIntervalColor(
  type: Interval,
  isItBackground: boolean
): string {
  if (isItBackground) {
    switch (type) {
      case intervals.work:
        return colors.red
      case intervals.smallBreak:
        return colors.green
      case intervals.bigBreak:
        return colors.green
      default:
        return 'grey'
    }
  }

  switch (type) {
    case intervals.work:
      return '#c7c7c7'
    case intervals.smallBreak:
      return '#a2a2a2'
    case intervals.bigBreak:
      return '#a2a2a2'
    default:
      return 'grey'
  }
}
