// @flow

import React from 'react'

const selectAll = event => event.target.select()

const Settings = ({
  settings,
  set,
}: {
  settings: SettingsState,
  set: (field: string, value: string | number) => void,
}) =>
  <div>
    <div>
      Время работы
      <button
        onClick={() =>
          set('WorkDuration', settings.intervalDurationsInMin.work - 1)}>
        <i className="fa fa-minus" />
      </button>
      <input
        type="text"
        value={settings.intervalDurationsInMin.work}
        onChange={event => set('WorkDuration', event.target.value)}
        onFocus={selectAll}
      />
      <button
        onClick={() =>
          set('WorkDuration', settings.intervalDurationsInMin.work + 1)}>
        <i className="fa fa-plus" />
      </button>
    </div>

    <div>
      Время малого отдыха
      <button
        onClick={() =>
          set(
            'SmallBreakDuration',
            settings.intervalDurationsInMin.smallBreak - 1
          )}>
        <i className="fa fa-minus" />
      </button>
      <input
        type="text"
        value={settings.intervalDurationsInMin.smallBreak}
        onChange={event => set('SmallBreakDuration', event.target.value)}
        onFocus={selectAll}
      />
      <button
        onClick={() =>
          set(
            'SmallBreakDuration',
            settings.intervalDurationsInMin.smallBreak + 1
          )}>
        <i className="fa fa-plus" />
      </button>
    </div>

    <div>
      Время большого отдыха
      <button
        onClick={() =>
          set(
            'BigBreakDuration',
            settings.intervalDurationsInMin.bigBreak - 1
          )}>
        <i className="fa fa-minus" />
      </button>
      <input
        type="text"
        value={settings.intervalDurationsInMin.bigBreak}
        onChange={event => set('BigBreakDuration', event.target.value)}
        onFocus={selectAll}
      />
      <button
        onClick={() =>
          set(
            'BigBreakDuration',
            settings.intervalDurationsInMin.bigBreak + 1
          )}>
        <i className="fa fa-plus" />
      </button>
    </div>

    <div>
      Количество помидоров в раунде
      <button
        onClick={() => set('PomidoroInRound', settings.pomidoroInRound - 1)}>
        <i className="fa fa-minus" />
      </button>
      <input
        type="text"
        value={settings.pomidoroInRound}
        onChange={event => set('PomidoroInRound', event.target.value)}
        onFocus={selectAll}
      />
      <button
        onClick={() => set('PomidoroInRound', settings.pomidoroInRound + 1)}>
        <i className="fa fa-plus" />
      </button>
    </div>

    <div>
      Цель на день
      <button
        onClick={() =>
          set('TargetNumberOfPomidoro', settings.targetNumberOfPomidoro - 1)}>
        <i className="fa fa-minus" />
      </button>
      <input
        type="text"
        value={settings.targetNumberOfPomidoro}
        onChange={event => set('TargetNumberOfPomidoro', event.target.value)}
        onFocus={selectAll}
      />
      <button
        onClick={() =>
          set('TargetNumberOfPomidoro', settings.targetNumberOfPomidoro + 1)}>
        <i className="fa fa-plus" />
      </button>
    </div>
  </div>

export default Settings
