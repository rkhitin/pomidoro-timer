// @flow
import React from 'react'
import glamorous from 'glamorous'
import { NavLink } from 'react-router-dom'
import TodoComponent from '../components/Todo'
import colors from '../constants/colors'

const EmptyTodo = glamorous.div({
  color: '#999',
  textAlign: 'center',
  borderBottom: '1px solid #eee',
  padding: '15px 0',

  '&>a': {
    color: colors.red,
    textDecoration: 'none',

    '&:hover': {
      color: colors.redSecondary,
    },
  },
})

class CurrentTodo extends React.Component {
  state = {
    currentTodo: null,
    todoOpacity: 1,
  }

  constructor(props) {
    super(props)

    const { todos, currentTodoId } = props
    const currentTodo = todos.find(t => t.id === currentTodoId)

    this.state = {
      currentTodo,
      todoOpacity: 1,
    }
  }

  componentWillReceiveProps = nextProps => {
    const setTodoWithProps = this.setTodo.bind(this, nextProps)

    if (
      !this.state.currentTodo ||
      !nextProps.currentTodoId ||
      nextProps.currentTodoId === this.state.currentTodo.id
    ) {
      setTodoWithProps(nextProps.currentTodoId)
    } else {
      const currentTodoId = this.state.currentTodo
        ? this.state.currentTodo.id
        : null

      setTodoWithProps(currentTodoId)

      this.fadeOut()

      setTimeout(() => {
        setTodoWithProps(nextProps.currentTodoId)
        this.fadeIn()
      }, 400)
    }
  }

  setTodo = (props, todoId) => {
    const currentTodo = props.todos.find(t => t.id === todoId)
    this.setState({ currentTodo })
  }

  fadeOut = () => this.fade(false)

  fadeIn = () => this.fade(true)

  fade = isItIn => {
    const step = 0.2
    setTimeout(() => {
      const { todoOpacity } = this.state
      const newTodoOpacity = isItIn ? todoOpacity + step : todoOpacity - step

      this.setState({ todoOpacity: newTodoOpacity })

      const isNeedMore = isItIn ? newTodoOpacity <= 1 : newTodoOpacity >= 0

      if (isNeedMore) this.fade(isItIn)
    }, 50)
  }

  render() {
    const { isItBreak, toggleCompleteness } = this.props
    const { currentTodo } = this.state

    const Todo = currentTodo
      ? TodoComponent.bind(
          null,
          currentTodo,
          null,
          toggleCompleteness,
          {},
          {},
          isItBreak
        )
      : () => (
          <EmptyTodo>
            Вы еще не добавили задачу. <NavLink to="/todo">Добавить</NavLink>
          </EmptyTodo>
        )

    return (
      <div style={{ opacity: this.state.todoOpacity }}>
        <Todo />
      </div>
    )
  }
}

export default CurrentTodo
