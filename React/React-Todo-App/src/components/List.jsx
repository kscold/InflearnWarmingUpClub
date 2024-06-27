import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const List = ({ todoData, setTodoData }) => {
  const handleClick = (id) => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleCompleChange = (id) => {
    const newTodoData = todoData.map((data) =>
      data.id === id ? { ...data, completed: !data.completed } : data
    );
    setTodoData(newTodoData);
  };

  const handleEnd = (result) => {
    console.log(result);

    // 드랍할 때 목적지가 없으면 취소
    if (!result.destination) return;

    const newTodoData = [...todoData]; // 배열 객체를 복사

    const [reorderedItem] = newTodoData.splice(result.source.index, 1); // 시작인덱스 아이템(변경 아이템) 하나 삭제 후 새로운 배열에 대입

    // 원하는 자리에 reorderedItem을 추가함
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable
          droppableId="todo" // 원하는 이름을 설정하면 됨
        >
          {(
            provided // 첫번째 매개변수는 provided가 됨
          ) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      key={data.id}
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
                          defaultChecked={data.completed}
                          onClick={() => handleCompleChange(data.id)}
                        />{' '}
                        <span
                          className={
                            data.completed ? 'line-through' : undefined
                          }
                        >
                          {data.title}
                        </span>
                      </div>
                      <div className="items-center">
                        <button
                          className="px-4 py-2 float-right"
                          onClick={() => handleClick(data.id)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default List;
