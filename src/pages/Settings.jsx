// @flow

import React from 'react'

const Settings = ({
  settings,
  actions,
}: {
  settings: SettingsStateType,
  actions: Object,
}) => {
  console.dir(actions)
  return (
    <div>
      <div>
        Время работы
        <hr />
        <button onClick={actions.work.decrease}>
          <i className="fa fa-minus" />
        </button>
        <input
          type="text"
          value={settings.durations.work}
          onChange={actions.work.set}
        />
        <button onClick={actions.work.decrease}>
          <i className="fa fa-plus" />
        </button>
      </div>
    </div>
  )
}

Settings.propTypes = {}

export default Settings
