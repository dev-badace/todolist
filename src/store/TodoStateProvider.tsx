import React, { createContext, useReducer } from "react";
import { TodoState, TodoActionType } from "../interfaces/TodoReducerInterface";
import { todoInitialState, todoReducer } from "../reducer/TodoReducer";

export const TodoStateContext = createContext<
  [TodoState, React.Dispatch<TodoActionType>]
>(undefined!);

export const TodoContextProvider: React.FC<{}> = ({ children }) => {
  const reducer = useReducer(todoReducer, todoInitialState);
  return (
    <TodoStateContext.Provider value={reducer}>
      {children}
    </TodoStateContext.Provider>
  );
};

//TODO create a context helper function to avoid undefined!
export const createMyContext = <T, K>(t: T, k: K) => {
  return [t, k] as const;
};
