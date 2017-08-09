declare type Interval = 'work' | 'smallBreak' | 'bigBreak'

declare type Settings = {
  intervalDurationsInMin: {
    work: number,
    smallBreak: number,
    bigBreak: number,
  },
  pomidoroInRound: number,
  targetNumberOfPomidoro: number,
}

declare type Timer = {
  currentInterval: Interval,
  totalSpentTimeInMin: number,
  restOfIntervalInSec: number,
}

declare type GlobalState = {
  settings: Settings,
  timer: Timer,
}

declare type IntervalScheme = {
  width: string,
  activeWidth: string,
  type: Interval,
}
