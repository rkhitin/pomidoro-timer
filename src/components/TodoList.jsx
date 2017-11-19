// @flow
import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import TodoComponent from './Todo'

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'white',
})

const TodoList = ({
  todos,
  remove,
  reorder,
  toggleCompleteness,
}: {
  todos: Array<Todo>,
  remove: () => any,
  reorder: () => any,
  toggleCompleteness: () => any,
}) => (
  <DragDropContext
    onDragEnd={({ source, destination }) =>
      reorder(source.index, destination.index)}
  >
    <Droppable droppableId="droppable">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {todos.map(todo => (
            <Draggable key={todo.id} draggableId={todo.id}>
              {TodoComponent.bind(null, todo, remove, toggleCompleteness)}
            </Draggable>
          ))}
        </div>
      )}
    </Droppable>
  </DragDropContext>
)

export default TodoList
