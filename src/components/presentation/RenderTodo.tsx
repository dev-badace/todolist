import React, { useState } from "react";
import { ITodo, TodoStatus } from "../../interfaces/TodoInterface";
import CompleteTodo from "../CompleteTodo";
import DeleteTodo from "../DeleteTodo";
import UpdateTodo from "../UpdateTodo";

interface RenderTodoItf {
  todo: ITodo;
}

export const RenderTodo: React.FC<RenderTodoItf> = ({ todo }) => {
  const [updaterUI, setUpdaterUI] = useState(false);

  const resetUi = () => setUpdaterUI(false);

  const renderTodos = () => {
    const todoClassName = (status: boolean): string => {
      return status ? "todo-li--body-completed" : "";
    };

    return updaterUI ? (
      <UpdateTodo onComplete={resetUi} id={todo.id} />
    ) : (
      <li className="todo-li">
        <span
          className={`todo-li--body ${todoClassName(
            todo.status === TodoStatus.completed
          )}`}
          onClick={() => setUpdaterUI(true)}
        >
          {todo.body}
        </span>
        <CompleteTodo id={todo.id} /> <DeleteTodo id={todo.id} />
      </li>
    );
  };

  return <div>{renderTodos()}</div>;
};

export default RenderTodo;
