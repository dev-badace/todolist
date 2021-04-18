import { ITodo, TodoStatus } from "../interfaces/TodoInterface";
import {
  TodoActionType,
  TodoReducer,
  TodoState,
} from "../interfaces/TodoReducerInterface";

export const todoInitialState: TodoState = {
  todos: [
    {
      body: "Hey There Welcome to Shiny Todo",
      id: "1231",
      status: TodoStatus.active,
    },
    {
      body: "These are default Todos",
      id: "12e31",
      status: TodoStatus.active,
    },
    {
      body: "Create Your Own Todos and manage your workload!",
      id: "12w31",
      status: TodoStatus.active,
    },
  ],
};

export const todoReducer: TodoReducer = (
  state: TodoState,
  action: TodoActionType
): TodoState => {
  switch (action.type) {
    case "Create": {
      return { todos: [...state.todos, action.payload] };
    }
    case "Update": {
      const newTodoList = state.todos.map(
        (todo): ITodo => {
          return todo.id !== action.payload.id
            ? todo
            : { ...todo, ...action.payload.data };
        }
      );
      return { todos: newTodoList };
    }
    case "Complete": {
      const newTodoList = state.todos.map(
        (todo): ITodo => {
          return todo.id !== action.payload.id
            ? todo
            : {
                ...todo,
                status:
                  todo.status === TodoStatus.completed
                    ? TodoStatus.active
                    : TodoStatus.completed,
              };
        }
      );
      return { todos: newTodoList };
    }
    case "Delete": {
      return {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };
    }
    default:
      return state;
  }
};
