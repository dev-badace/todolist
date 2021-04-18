import React, { useRef, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoStatus } from "../interfaces/TodoInterface";
import { TodoStateContext } from "../store/TodoStateProvider";

export const CreateTodo: React.FC<{}> = () => {
  const [, dispatch] = useContext(TodoStateContext);
  const todoInputRef = useRef<HTMLInputElement>(null!);
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");

  const resetForm = () => {
    setTodo("");
    setError("");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo) {
      todoInputRef.current?.focus();
      return setError("Can not add an Empty Todo");
    }
    dispatch({
      type: "Create",
      payload: {
        body: todo,
        id: uuid(),
        status: TodoStatus.active,
      },
    });

    resetForm();
  };

  const renderInput = () => {
    return (
      <>
        <form spellCheck={false} className="todo-form" onSubmit={onSubmit}>
          <div className="todo-error">{error}</div>
          <input
            className="todo-input"
            placeholder="Add a Todo"
            ref={todoInputRef}
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="button todo-button">&#x27A4;</button>
        </form>
      </>
    );
  };

  return <div>{renderInput()}</div>;
};

export default CreateTodo;
