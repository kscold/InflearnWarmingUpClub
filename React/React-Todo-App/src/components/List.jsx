import React, { useState } from 'react';

const List = ({
  id,
  title,
  completed,
  todoData,
  setTodoData,
  provided,
  snapshot,
  handleClick,
}) => {
  console.log('List Component');

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleCompleChange = (id) => {
    const newTodoData = todoData.map((data) =>
      data.id === id ? { ...data, completed: !data.completed } : data
    );
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
  };

  const handleEditedChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodoData = todoData.map((data) =>
      id === data.id ? { ...data, title: editedTitle } : data
    );

    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
        <div className="items-center">
          <form onSubmit={handleSubmit}>
            <input
              value={editedTitle}
              onChange={handleEditedChange}
              className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
            />
          </form>
        </div>
        <div className="items-center">
          <button
            className="px-4 py-2 float-right"
            onClick={() => setIsEditing(false)}
          >
            x
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 float-right"
            type="submit"
          >
            save
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'
        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
      >
        <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={completed}
            onClick={() => handleCompleChange(id)}
          />{' '}
          <span className={completed ? 'line-through' : undefined}>
            {title}
          </span>
        </div>
        <div className="items-center">
          <button
            className="px-4 py-2 float-right"
            onClick={() => handleClick(id)}
          >
            x
          </button>
          <button
            className="px-4 py-2 float-right"
            onClick={() => setIsEditing(true)}
          >
            edit
          </button>
        </div>
      </div>
    );
  }
};

export default React.memo(List);
