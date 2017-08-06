// @flow

export function calculateTargetTimeInMin(settings: Settings): number {
  let bigBreakNumbers = Math.floor(settings.targetNumberOfPomidoro / settings.pomidoroInRound)

  if (settings.targetNumberOfPomidoro % settings.pomidoroInRound === 0) {
    bigBreakNumbers--
  }

  return (
    bigBreakNumbers * settings.intervalDurationsInMin.bigBreak +
    settings.targetNumberOfPomidoro * settings.intervalDurationsInMin.work +
    (settings.targetNumberOfPomidoro - 1 - bigBreakNumbers) * settings.intervalDurationsInMin.smallBreak
  )
}

export const getMinutes = (time: number): number => Math.floor(time / 60)

