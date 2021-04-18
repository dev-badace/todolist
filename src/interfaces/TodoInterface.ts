export enum TodoStatus {
  active = "active",
  completed = "completed",
}

export interface ITodo {
  body: string;
  status: TodoStatus;
  id: string;
}

export interface ITodos {
  todos: ITodo[];
}
