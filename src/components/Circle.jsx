// @flow
import React from 'react'
import colors from '../constants/colors'

class Circle extends React.Component {
  constructor(props) {
    super(props)

    this.ctx = null
    this.quart = Math.PI / 2
  }

  componentDidMount = () => {
    const bg = this.refs['timer-canvas']

    this.ctx = bg.getContext('2d')
    this.ctx.beginPath()
    this.ctx.strokeStyle = this.props.isItWork ? colors.red : colors.green
    this.ctx.lineCap = 'round'
    this.ctx.closePath()
    this.ctx.fill()
    this.ctx.lineWidth = 15.0
    this.imd = this.ctx.getImageData(0, 0, 700, 700)

    this.draw(this.props.progressBarWidth)
  }

  componentDidUpdate = () => {
    this.draw(this.props.progressBarWidth)
  }

  draw = current => {
    const linePoint = (1 - current) * 2 - 0.5 + 0.01

    this.ctx.putImageData(this.imd, 0, 0)
    this.ctx.beginPath()
    this.ctx.strokeStyle = this.props.isItWork ? '#ff6347' : '#0eb26d'
    this.ctx.arc(350, 350, 300, -this.quart, linePoint * Math.PI, true)
    this.ctx.stroke()
  }

  render() {
    return <canvas ref="timer-canvas" width="700" height="700" />
  }
}

export default Circle
