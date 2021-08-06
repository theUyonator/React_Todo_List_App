import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function() {
  render(<TodoList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo item", function() {
  const { getByLabelText, queryByText } = render(<TodoList />);

  // no items yet
  expect(queryByText("Get ice cream")).not.toBeInTheDocument();

  const todoInput = getByLabelText("Todo Item:");
  const submitBtn = queryByText("Add a new todo!")

  // fill out the form
  fireEvent.change(todoInput, { target: { value: "Get ice cream" }});
  fireEvent.click(submitBtn);

  // item exists!
  expect(queryByText("Get ice cream")).toBeInTheDocument();
});


it("can remove a todo", function(){

    const { getByLabelText, queryByText } = render(<TodoList />);
  
    const todoInput = getByLabelText("Todo Item:");
    const submitBtn = queryByText("Add a new todo!")
  
    // fill out the form
    fireEvent.change(todoInput, { target: { value: "Get ice cream" }});
    fireEvent.click(submitBtn);

    // todo item exists!
    expect(queryByText("Get ice cream")).toBeInTheDocument();

    const removeButton = queryByText("X");
    // Click the remove btn and expect todo not to be in the document anymore
    fireEvent.click(removeButton);
    expect(queryByText("Get ice cream")).not.toBeInTheDocument();

});