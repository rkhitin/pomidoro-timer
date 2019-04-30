// @flow
import React from 'react'
import styled from '@emotion/styled'

import TodoList from '../components/TodoList'
import colors from '../constants/colors'

const Content = styled.div({
  width: '100%',
  margin: '20px auto 0',
  padding: '15px',
  boxSizing: 'border-box',

  '@media(min-width: 500px)': {
    padding: '15px 0',
    width: '70%',
  },
})

const Button = styled.button({
  backgroundColor: 'white',
  color: colors.red,
  border: `1px solid ${colors.red}`,
  width: '40px',
  height: '40px',
  borderRadius: '0 3px 3px 0',
  cursor: 'pointer',
  boxSizing: 'border-box',
  fontSize: '17px',
  display: 'flex',
  justifyContent: 'center',
  borderLeft: 'none',

  '&:active, &:focus': {
    outline: 'none',
  },

  '&:hover': {
    color: colors.redSecondary,
  },
})

const Input = styled.input({
  width: 'calc(100% - 40px)',
  borderRadius: '3px 0 0 3px',
  height: '40px',
  border: `1px solid ${colors.red}`,
  boxSizing: 'border-box',
  padding: '0 5px',

  '&:active, &:focus': {
    outline: 'none',
  },
})

const Controls = styled.div({
  display: 'flex',
})

const TodoPage = ({
  todos,
  add,
  toggleCompleteness,
  remove,
  reorder,
  todoText,
  handleTodoTextChange,
  handleKeyPress,
}: {
  todos: Array<Todo>,
  add: () => any,
  toggleCompleteness: () => any,
  remove: () => any,
  reorder: () => any,
  todoText: string,
  handleTodoTextChange: () => any,
  handleKeyPress: () => any,
}) => (
  <Content>
    <Controls>
      <Input
        type="text"
        value={todoText}
        onChange={handleTodoTextChange}
        onKeyPress={handleKeyPress}
        placeholder="Нужно сделать"
      />
      <Button onClick={add}>
        <i className="fa fa-plus" />
      </Button>
    </Controls>

    <div>
      <TodoList
        todos={todos}
        remove={remove}
        reorder={reorder}
        toggleCompleteness={toggleCompleteness}
      />
    </div>
  </Content>
)

export default TodoPage
