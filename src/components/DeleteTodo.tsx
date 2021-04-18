import React, { useContext } from "react";
import { TodoStateContext } from "../store/TodoStateProvider";
import { BsTrash } from "react-icons/bs";

interface DeleteTodoItf {
  id: string;
}

export const DeleteTodo: React.FC<DeleteTodoItf> = ({ id }) => {
  const [, dispatch] = useContext(TodoStateContext);

  const onDelete = () => {
    dispatch({ type: "Delete", payload: { id } });
  };

  return (
    <div>
      <button className="button todo-delete-button" onClick={onDelete}>
        <BsTrash />
      </button>
    </div>
  );
};

export default DeleteTodo;
