import React, { useRef, useState } from 'react';
import List from './components/List';
import './App.css';
import Form from './components/Form';

const App = () => {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState('');
  const ref = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: ref.current,
      title: value,
      completed: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
    setValue('');
    ref.current += 1;
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-4 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} />

        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
};

export default App;
