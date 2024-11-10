import { useState } from 'react';
import TodoDoneList from './TodoDoneList';

export default function TodoList({ todoList, setTodoList }) {
  const [todoDoneList, setTodoDoneLsit] = useState([]);

  const handleRemove = (e, id) => {
    // e.preventDefault();
    const romveTodo = todoList.filter((el) => el.id !== id);
    setTodoList(romveTodo);
  };

  const handleComplet = (e, id) => {
    // e.preventDefault();
    console.log('완료버튼 클릭', id);

    const romveTodo = todoList.filter((el) => el.id !== id);
    setTodoList(romveTodo);

    const cpmpletTodo = todoList.filter((el) => el.id === id);
    setTodoDoneLsit(cpmpletTodo);
  };
  return (
    <>
      <div>
        <h1>working</h1>
        {todoList &&
          todoList.map((todo) => {
            return (
              <div key={todo.id}>
                <h3>{todo.titel}</h3>
                <li>{todo.detail}</li>
                <button onClick={(e) => handleRemove(e, todo.id)}>삭제</button>
                <button onClick={(e) => handleComplet(e, todo.id)}>완료</button>
              </div>
            );
          })}
      </div>

      <TodoDoneList
        setTodoList={setTodoList}
        todoDoneList={todoDoneList}
        setTodoDoneLsit={setTodoDoneLsit}
      />
    </>
  );
}
