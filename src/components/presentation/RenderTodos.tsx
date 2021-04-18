import React, { useContext } from "react";
import { TodoStateContext } from "../../store/TodoStateProvider";
import RenderTodo from "./RenderTodo";

export const RenderTodos: React.FC<{}> = () => {
  const [{ todos }] = useContext(TodoStateContext);

  const renderTodos = () => {
    if (todos.length === 0) return <div>No todo Please add a todo</div>;

    return (
      <ul className="todo-ul">
        {todos.map(
          (todo): JSX.Element => {
            return <RenderTodo key={todo.id} todo={todo} />;
          }
        )}
      </ul>
    );
  };

  return <div>{renderTodos()}</div>;
};

export default RenderTodos;
