import React, { useRef, useState } from 'react';
import './App.css';

const App = () => {
  const [todoData, setTodoData] = useState([]);
  const [input, setInput] = useState('');
  const ref = useRef(3);
  const btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  };

  const listStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    };
  };

  const handleClick = (id) => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleChange = (e) => {
    console.log('e', e.target.value);
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: ref.current,
      title: input,
      completed: false,
    };

    setTodoData([...todoData, newTodo]);
    setInput('');
    ref.current += 1;
  };

  const handleCompleChange = (id) => {
    const newTodoData = todoData.map((data) =>
      data.id === id ? { ...data, completed: !data.completed } : data
    );
    setTodoData(newTodoData);
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        {todoData.map((data) => (
          <div style={listStyle(data.completed)} key={data.id}>
            <input
              type="checkbox"
              defaultChecked={data.completed}
              onClick={() => handleCompleChange(data.id)}
            />
            {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>
              x
            </button>
          </div>
        ))}

        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: '10', padding: '5px' }}
            placeholder="해야할 일을 입력하세요."
            value={input}
            onChange={handleChange}
          />
          <input type="submit" value="입력" style={{ flex: '1' }} />
        </form>
      </div>
    </div>
  );
};

export default App;
