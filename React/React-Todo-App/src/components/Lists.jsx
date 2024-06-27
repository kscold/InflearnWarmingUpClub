import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';

const Lists = ({ todoData, setTodoData, handleClick }) => {
  console.log('Lists Component');

  const handleEnd = (result) => {
    console.log(result);

    // 드랍할 때 목적지가 없으면 취소
    if (!result.destination) return;

    const newTodoData = [...todoData]; // 배열 객체를 복사

    const [reorderedItem] = newTodoData.splice(result.source.index, 1); // 시작인덱스 아이템(변경 아이템) 하나 삭제 후 새로운 배열에 대입

    // 원하는 자리에 reorderedItem을 추가함
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
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
                    <List
                      handleClick={handleClick}
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                    />
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

export default React.memo(Lists);
