import React, { useCallback, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Lists from './components/Lists';

const initialTodoData = localStorage.getItem('todoData')
  ? JSON.parse(localStorage.getItem('todoData'))
  : [];

const App = () => {
  console.log('App Component');
  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState('');
  const ref = useRef(0);

  const handleClick = useCallback(
    (id) => {
      const newTodoData = todoData.filter((data) => data.id !== id);
      setTodoData(newTodoData);
    },
    [todoData]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: ref.current,
      title: value,
      completed: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
    localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]));
    setValue('');
    ref.current += 1;
  };

  const handleRemoveClick = () => {
    setTodoData([]);
    localStorage.setItem('todoData', JSON.stringify([]));
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-4 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>

        <Lists
          handleClick={handleClick}
          todoData={todoData}
          setTodoData={setTodoData}
        />

        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
};

export default App;
