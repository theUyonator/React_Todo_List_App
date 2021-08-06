import React, { useState } from "react";

/** Form for creating a new todo item to add to a list.
 *
 * Has state for the todo item; on submission,
 * sends {todo} to fn rec'd from parent.
 *
 */

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = { todo: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {todo} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo Item:</label>
      <input
        id="todo"
        name="todo"
        value={formData.todo}
        onChange={handleChange}
      />

      <button>Add a new todo!</button>
    </form>
  );
};

export default NewTodoForm;
