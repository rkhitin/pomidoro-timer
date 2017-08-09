// @flow
import intervals from '../constants/intervals'
import getNextInterval from './getNextInterval'
import { calculateTargetTimeInMin } from './common'

export default function(
  restOfIntervalInSec: number,
  totalSpentTimeInMin: number,
  settings: Settings
): Array<IntervalScheme> {
  const targetTimeInMin = calculateTargetTimeInMin(settings)

  let progressBarScheme: Array<IntervalScheme> = []
  let countOfWorkInterval = 0
  let interval = intervals.work
  let innerSpentTimeInMin = 0

  while (countOfWorkInterval < settings.targetNumberOfPomidoro) {
    const nextInterval = getNextInterval(
      interval,
      innerSpentTimeInMin,
      settings
    )
    const currentIntervalDurationInMin =
      settings.intervalDurationsInMin[interval]

    const width =
      settings.intervalDurationsInMin[interval] * 100 / targetTimeInMin

    let activeWidth = 0

    if (totalSpentTimeInMin > innerSpentTimeInMin) activeWidth = 100

    if (totalSpentTimeInMin === innerSpentTimeInMin) {
      const currentIntervalDurationInSec = currentIntervalDurationInMin * 60

      activeWidth =
        100 *
        (currentIntervalDurationInSec - restOfIntervalInSec) /
        currentIntervalDurationInSec
    }

    // else if (
    //   innerSpentTimeInMin <
    //   totalSpentTimeInMin + currentIntervalDurationInMin
    // ) {
    //   console.log('active')
    //   const currentIntervalDurationInSec = currentIntervalDurationInMin * 60

    //   activeWidth =
    //     100 *
    //     (currentIntervalDurationInSec - restOfIntervalInSec) /
    //     currentIntervalDurationInSec
    // }
    // console.log(innerSpentTimeInMin, totalSpentTimeInMin, currentIntervalDurationInMin)
    // if (innerSpentTimeInMin >= totalSpentTimeInMin) {
    //   if (
    //     innerSpentTimeInMin <
    //     totalSpentTimeInMin + currentIntervalDurationInMin
    //   ) {
    //     const currentIntervalDurationInSec = currentIntervalDurationInMin * 60

    //     activeWidth =
    //       100 *
    //       (currentIntervalDurationInSec - restOfIntervalInSec) /
    //       currentIntervalDurationInSec
    //   } else {
    //     activeWidth = 0
    //   }
    // }

    const intervalScheme = {
      width: `${width}%`,
      activeWidth: `${activeWidth}%`,
      type: interval,
    }

    progressBarScheme.push(intervalScheme)

    innerSpentTimeInMin += settings.intervalDurationsInMin[interval]
    if (interval === intervals.work) countOfWorkInterval++
    interval = nextInterval
  }

  return progressBarScheme
}
