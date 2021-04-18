import React, { useRef, useContext, useState, useEffect } from "react";
import { TodoStateContext } from "../store/TodoStateProvider";

interface UpdateTodoItf {
  id: string;
  onComplete: () => void;
}

export const UpdateTodo: React.FC<UpdateTodoItf> = ({ id, onComplete }) => {
  const [{ todos }, dispatch] = useContext(TodoStateContext);
  const todoInputRef = useRef<HTMLInputElement>(null!);
  const [todo, setTodo] = useState(todos.find((todo) => todo.id === id)?.body);
  const [error, setError] = useState("");

  useEffect(() => {
    todoInputRef.current.focus();
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo) {
      todoInputRef.current?.focus();
      return setError("Can not add an Empty Todo");
    }
    dispatch({
      type: "Update",
      payload: {
        id,
        data: {
          body: todo,
        },
      },
    });
    onComplete();
  };

  const renderInput = () => {
    return (
      <>
        <form
          spellCheck={false}
          className="todo-form todo-form--update"
          onSubmit={onSubmit}
        >
          <div className="todo-error">{error}</div>
          <input
            className="todo-input"
            ref={todoInputRef}
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="button todo-button todo-button--update">
            &#x27A4;
          </button>
        </form>
      </>
    );
  };

  return <div>{renderInput()}</div>;
};

export default UpdateTodo;
