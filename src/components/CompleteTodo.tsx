import React, { useContext } from "react";
import { TodoStateContext } from "../store/TodoStateProvider";

interface CompleteTodoItf {
  id: string;
}

export const CompleteTodo: React.FC<CompleteTodoItf> = ({ id }) => {
  const [, dispatch] = useContext(TodoStateContext);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "Complete",
      payload: {
        id,
      },
    });
  };

  const render = () => {
    return (
      <>
        <form onSubmit={onSubmit}>
          <button className="button todo-complete-button">&#x2713;</button>
        </form>
      </>
    );
  };

  return <div>{render()}</div>;
};

export default CompleteTodo;
