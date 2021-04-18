import { Reducer } from "react";
import { ITodo } from "./TodoInterface";

export interface TodoState {
  todos: ITodo[];
}

export type TodoActionType =
  | { type: "Create"; payload: ITodo }
  | { type: "Delete"; payload: { id: string } }
  | { type: "Update"; payload: { id: string; data: Partial<ITodo> } }
  | { type: "Complete"; payload: { id: string } };

export type TodoReducer = Reducer<TodoState, TodoActionType>;
