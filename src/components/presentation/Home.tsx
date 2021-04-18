import React from "react";
import CreateTodo from "../CreateTodo";
import RenderTodos from "./RenderTodos";

export const Home: React.FC<{}> = () => {
  return (
    <div className="todo-box">
      <CreateTodo />
      <RenderTodos />
    </div>
  );
};

export default Home;
