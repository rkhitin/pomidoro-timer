// @flow
import React from 'react'
import { connect } from 'react-redux'

import { add, toggleCompleteness, remove, reorder } from '../redux/modules/todo'
import Todo from '../pages/Todo'

class TodoContainer extends React.Component {
  state = {
    todoText: '',
  }

  handleTodoTextChange = (e: any) => {
    this.setState({
      todoText: e.target.value,
    })
  }

  handleKeyPress = e => {
    if (e.key !== 'Enter') return

    this.addTodo()
  }

  addTodo = () => {
    if (!this.state.todoText) return

    this.props.add(this.state.todoText)
    this.setState({ todoText: '' })
  }

  render() {
    return (
      <Todo
        {...this.props}
        add={this.addTodo}
        todoText={this.state.todoText}
        handleTodoTextChange={this.handleTodoTextChange}
        handleKeyPress={this.handleKeyPress}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todo,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (text: string) => dispatch(add(text)),
    toggleCompleteness: (todoId: string) =>
      dispatch(toggleCompleteness(todoId)),
    remove: (todoId: string) => dispatch(remove(todoId)),
    reorder: (source: number, destination: number) =>
      dispatch(reorder(source, destination)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
