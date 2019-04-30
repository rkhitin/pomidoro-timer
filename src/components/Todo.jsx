// @flow
import React from 'react'
import styled from '@emotion/styled'


import colors from '../constants/colors'

const getItemStyle = (draggableStyle, isDragging) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  borderBottom: `1px solid ${colors.red}`,
  padding: '10px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  // change background colour if dragging
  background: isDragging ? '#ffbbaf' : 'white',

  // styles we need to apply on draggables
  ...draggableStyle,
})

const Todo = styled.div({
  width: '100%',
})

const RemoveButton = styled.span({
  cursor: 'pointer',
  color: colors.red,
  textAlign: 'center',
  width: '40px',

  '&:hover': {
    color: colors.redSecondary,
  },
})

const CompletenesWrapper = styled.div({
  textAlign: 'center',
  width: '24px',
  height: '24px',
  marginRight: '10px',
})

const Text = styled.div`
  width: calc(100% - 40px);
  padding: 3px 0;
  text-decoration: ${({ isCompleted }) => isCompleted ? 'line-through' : 'none'}
`

const CompletenesAndText = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: 'calc(100% - 40px)',
})

const TodoComponent = (
  todo: Todo,
  remove: ?() => any,
  toggleCompleteness: () => any,
  provided: Object,
  snapshot: Object,
  isItBreak: boolean = true
) => (
  <Todo>
    <div
      ref={provided.innerRef}
      style={getItemStyle(provided.draggableStyle, snapshot.isDragging)}
      {...provided.dragHandleProps}
    >
      <CompletenesAndText>
        <CompletenesWrapper>
          <input
            id={todo.id}
            type="checkbox"
            checked={todo.isCompleted}
            onChange={toggleCompleteness.bind(null, todo.id)}
            disabled={!isItBreak}
          />
          <label htmlFor={todo.id} />
        </CompletenesWrapper>

        <Text isCompleted={todo.isCompleted}>{todo.text}</Text>
      </CompletenesAndText>

      {remove ? (
        <RemoveButton onClick={remove.bind(null, todo.id)}>
          <i className="fa fa-remove" />
        </RemoveButton>
      ) : (
        ''
      )}
    </div>
    {provided.placeholder}
  </Todo>
)

export default TodoComponent
