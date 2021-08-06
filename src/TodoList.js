import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";


function TodoList() {
  const [todos, setTodos] = useState([]);

  const remove = todo => {
    setTodos(todos.filter(t => t.id !== todo.id));
  };

  const renderItems = () => {
    return (
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            {t.todo}
            <button onClick={evt => remove(t)}>X</button>
          </li>
        ))}
      </ul>
    );
  };
  // end render Todos

  /** Add new item object to cart. */
  const addTodo = todo => {
    let newTodo = { ...todo, id: uuid() };
    setTodos(todos => [...todos, newTodo]);
  };
  // end addItem

  return (
    <div className="TodoList">
      <NewTodoForm addTodo={addTodo} />
      {renderItems()}
    </div>
  );
};
// end

export default TodoList;
