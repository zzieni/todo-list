function TodoDoneList({ setTodoList, todoDoneList, setTodoDoneLsit }) {
  const handleRemove = (e, id) => {
    // e.preventDefault();
    const romveTodo = todoDoneList.filter((el) => el.id !== id);
    setTodoDoneLsit(romveTodo);
  };

  const handleComplet = (e, id) => {
    // e.preventDefault();
    console.log('완료버튼 클릭', id);

    const romveTodo = todoDoneList.filter((el) => el.id !== id);
    setTodoDoneLsit(romveTodo);

    const cpmpletTodo = todoDoneList.filter((el) => el.id === id);
    setTodoList(cpmpletTodo);
  };
  return (
    <div>
      <h1>Done</h1>
      {todoDoneList &&
        todoDoneList.map((todo) => {
          return (
            <div key={todo.id}>
              <h3>{todo.titel}</h3>
              <li>{todo.detail}</li>
              <button onClick={(e) => handleRemove(e, todo.id)}>삭제</button>
              <button onClick={(e) => handleComplet(e, todo.id)}>취소</button>
            </div>
          );
        })}
    </div>
  );
}

export default TodoDoneList;
