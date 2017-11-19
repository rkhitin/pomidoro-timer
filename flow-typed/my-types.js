declare type Interval = 'work' | 'smallBreak' | 'bigBreak'

declare type Todo = {
  +id: string,
  +text: string,
  +isCompleted: boolean,
}

declare type ToDoState = Array<Todo>

declare type SettingsState = {
  +intervalDurationsInMin: {
    +work: number,
    +smallBreak: number,
    +bigBreak: number,
  },
  +pomidoroInRound: number,
  +targetNumberOfPomidoro: number,
}

declare type TimerState = {
  +currentInterval: Interval,
  +totalSpentTimeInMin: number,
  +restOfIntervalInSec: number,
}

declare type GlobalState = {
  +settings: SettingsState,
  +timer: TimerState,
}

declare type IntervalScheme = {
  +width: string,
  +activeWidth: string,
  +type: Interval,
}

declare type MemoryLane = {
  todoId: string,
  pomidoroCount: number,
}

declare type HistoryState = Array<MemoryLane>
