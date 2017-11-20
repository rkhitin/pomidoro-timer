// @flow
import React from 'react'
import glamorous from 'glamorous'
import colors from '../constants/colors'

const selectAll = event => event.target.select()

const Content = glamorous.div({
  width: '70%',
  margin: '0 auto',
  padding: '15px 0',
})

const Row = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '24px',

  '&:not(:last-child)': {
    marginBottom: '15px',
  },
})

const Label = glamorous.div({})
const Inputs = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40%',

  '&>input': {
    margin: '0 10px',
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
    border: '2px solid #ccc',
    borderRadius: '4px',
    width: '30px',
    textAlign: 'center',
  },
})
const Button = glamorous.span({
  color: colors.red,
  cursor: 'pointer',
  fontSize: '25px',
  '&:hover': {
    color: colors.redSecondary,
  },
})

const CheckBoxWrapper = glamorous.div({
  height: '24px',
  '& label': {
    paddingLeft: '24px !important',
  },
})

const SettingsPage = ({
  settings,
  set,
  toggleShowNotification,
}: {
  settings: SettingsState,
  set: (field: string, value: string | number) => void,
}) => (
  <Content>
    <Row>
      <Label>Время работы</Label>
      <Inputs>
        <Button
          onClick={() =>
            set('WorkDuration', settings.intervalDurationsInMin.work - 1)}
        >
          <i className="fa fa-minus" />
        </Button>
        <input
          type="text"
          value={settings.intervalDurationsInMin.work}
          onChange={event => set('WorkDuration', event.target.value)}
          onFocus={selectAll}
        />
        <Button
          onClick={() =>
            set('WorkDuration', settings.intervalDurationsInMin.work + 1)}
        >
          <i className="fa fa-plus" />
        </Button>
      </Inputs>
    </Row>

    <Row>
      <Label>Время малого отдыха</Label>
      <Inputs>
        <Button
          onClick={() =>
            set(
              'SmallBreakDuration',
              settings.intervalDurationsInMin.smallBreak - 1
            )}
        >
          <i className="fa fa-minus" />
        </Button>
        <input
          type="text"
          value={settings.intervalDurationsInMin.smallBreak}
          onChange={event => set('SmallBreakDuration', event.target.value)}
          onFocus={selectAll}
        />
        <Button
          onClick={() =>
            set(
              'SmallBreakDuration',
              settings.intervalDurationsInMin.smallBreak + 1
            )}
        >
          <i className="fa fa-plus" />
        </Button>
      </Inputs>
    </Row>

    <Row>
      <Label>Время большого отдыха</Label>
      <Inputs>
        <Button
          onClick={() =>
            set(
              'BigBreakDuration',
              settings.intervalDurationsInMin.bigBreak - 1
            )}
        >
          <i className="fa fa-minus" />
        </Button>
        <input
          type="text"
          value={settings.intervalDurationsInMin.bigBreak}
          onChange={event => set('BigBreakDuration', event.target.value)}
          onFocus={selectAll}
        />
        <Button
          onClick={() =>
            set(
              'BigBreakDuration',
              settings.intervalDurationsInMin.bigBreak + 1
            )}
        >
          <i className="fa fa-plus" />
        </Button>
      </Inputs>
    </Row>

    <Row>
      <Label>Количество помидоров в раунде</Label>
      <Inputs>
        <Button
          onClick={() => set('PomidoroInRound', settings.pomidoroInRound - 1)}
        >
          <i className="fa fa-minus" />
        </Button>
        <input
          type="text"
          value={settings.pomidoroInRound}
          onChange={event => set('PomidoroInRound', event.target.value)}
          onFocus={selectAll}
        />
        <Button
          onClick={() => set('PomidoroInRound', settings.pomidoroInRound + 1)}
        >
          <i className="fa fa-plus" />
        </Button>
      </Inputs>
    </Row>

    <Row>
      <Label>Цель на день</Label>
      <Inputs>
        <Button
          onClick={() =>
            set('TargetNumberOfPomidoro', settings.targetNumberOfPomidoro - 1)}
        >
          <i className="fa fa-minus" />
        </Button>
        <input
          type="text"
          value={settings.targetNumberOfPomidoro}
          onChange={event => set('TargetNumberOfPomidoro', event.target.value)}
          onFocus={selectAll}
        />
        <Button
          onClick={() =>
            set('TargetNumberOfPomidoro', settings.targetNumberOfPomidoro + 1)}
        >
          <i className="fa fa-plus" />
        </Button>
      </Inputs>
    </Row>

    <Row>
      <Label>Показывать уведомления</Label>
      <Inputs>
        <CheckBoxWrapper>
          <input
            id="show-notification"
            type="checkbox"
            checked={settings.showNotification}
            onChange={toggleShowNotification}
          />
          <label htmlFor="show-notification" />
        </CheckBoxWrapper>
      </Inputs>
    </Row>
  </Content>
)

export default SettingsPage
