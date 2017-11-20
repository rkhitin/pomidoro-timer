// @flow
import React from 'react'
import glamorous from 'glamorous'
import colors from '../constants/colors'

const Button = glamorous.button({
  backgroundColor: 'white',
  color: colors.red,
  border: `1px solid ${colors.red}`,
  padding: '15px',
  borderRadius: '3px',
  cursor: 'pointer',

  '&:active, &:focus': {
    outline: 'none',
  },

  '&:first-child': {
    borderRight: 'none',
    borderRadius: '3px 0 0 3px',
  },

  '&:last-child': {
    borderLeft: 'none',
    borderRadius: '0 3px 3px 0',
  },

  '&:hover': {
    color: colors.redSecondary,
  },
})

const CenterButton = glamorous(Button)({
  padding: '25px',
  fontSize: '25px',

  '&>i': {
    width: '20px',
  },
})

class TimerControls extends React.Component {
  state = {
    isTicking: false,
  }

  start = () => {
    this.setState({ isTicking: true })
    this.props.start()
  }

  pause = () => {
    this.setState({ isTicking: false })
    this.props.pause()
  }

  render() {
    const { next, reset } = this.props
    const centerButtonProps = this.state.isTicking
      ? { class: 'pause', handler: this.pause }
      : { class: 'play', handler: this.start }

    return (
      <div>
        <Button onClick={reset}>
          <i className="fa fa-undo" />
        </Button>
        <CenterButton onClick={centerButtonProps.handler}>
          <i className={`fa fa-${centerButtonProps.class}`} />
        </CenterButton>
        <Button onClick={next}>
          <i className="fa fa-forward" />
        </Button>
      </div>
    )
  }
}

export default TimerControls
