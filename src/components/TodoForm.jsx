import { useState } from 'react';
import TodoList from './TodoList';

function TodoForm() {
  const [titel, setTitel] = useState('');
  const [detail, setDetail] = useState('');
  const [id, setId] = useState(0);

  const [todoList, setTodoList] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();

    setId(id + 1);
    const newTodoList = {
      id,
      titel,
      detail,
    };
    setTodoList([...todoList, newTodoList]);

    setTitel('');
    setDetail('');
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <label>
          {' '}
          제목
          <input
            value={titel}
            onChange={(e) => setTitel(e.target.value)}
            required
          ></input>
        </label>

        <label>
          내용
          <input
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          ></input>
        </label>

        <button type="submit">추가하기</button>
      </form>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default TodoForm;
