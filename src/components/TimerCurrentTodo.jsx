// @flow
import React from 'react'
import glamorous from 'glamorous'
import TodoComponent from '../components/Todo'

class CurrentTodo extends React.Component {
  state = {
    currentTodo: null,
  }

  constructor(props) {
    super(props)

    const { todos, currentTodoId } = props
    const currentTodo = todos.find(t => t.id === currentTodoId)

    this.state = { currentTodo }
  }

  componentWillReceiveProps = nextProps => {
    if (
      !this.state.currentTodo ||
      !nextProps.currentTodoId ||
      nextProps.currentTodoId === this.state.currentTodo.id
    ) {
      const currentTodo = nextProps.todos.find(
        t => t.id === nextProps.currentTodoId
      )
      this.setState({ currentTodo })
    } else {
      const currentTodoId = this.state.currentTodo
        ? this.state.currentTodo.id
        : null

      const currentTodo = nextProps.todos.find(t => t.id === currentTodoId)

      this.setState({ currentTodo })

      setTimeout(() => {
        const currentTodo = nextProps.todos.find(
          t => t.id === nextProps.currentTodoId
        )
        this.setState({ currentTodo })
      }, 500)
    }
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
      : () => <div />

    return <Todo />
  }
}

export default CurrentTodo
