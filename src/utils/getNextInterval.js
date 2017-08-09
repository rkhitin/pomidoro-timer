// @flow
import intervals from '../constants/intervals'

export default function getNextInterval(
  currentInterval: Interval,
  totalSpentTimeInMin: number,
  settings: Settings
): Interval {
  function getNextRoundCount(
    currentRoundCount: number,
    interval: Interval
  ): number {
    if (interval !== intervals.work) return currentRoundCount

    return currentRoundCount < settings.pomidoroInRound
      ? currentRoundCount + 1
      : 1
  }

  function getNextInterval(
    interval: Interval,
    currentRoundCount: number
  ): Interval {
    if (interval === intervals.smallBreak || interval === intervals.bigBreak)
      return intervals.work

    if (currentRoundCount < settings.pomidoroInRound)
      return intervals.smallBreak

    return intervals.bigBreak
  }

  function getInterval(
    interval: Interval,
    roundCount: number = 1,
    innerTotalSpentTimeInMin: number = 0
  ): Interval {
    const nextInnerTotalSpentTimeInMin =
      innerTotalSpentTimeInMin + settings.intervalDurationsInMin[interval]
    const nextInterval = getNextInterval(interval, roundCount)
    const nextRoundCount = getNextRoundCount(roundCount, interval)

    if (nextInnerTotalSpentTimeInMin > totalSpentTimeInMin) return nextInterval

    return getInterval(
      nextInterval,
      nextRoundCount,
      nextInnerTotalSpentTimeInMin
    )
  }

  return getInterval(intervals.work)
}
