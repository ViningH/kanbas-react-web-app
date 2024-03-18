import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

function TodoItem({ todo, }: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      <form className="row g-3">
        <div className="col-3">
          {todo.title}
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" 
          onClick={() => dispatch(setTodo(todo))}> Edit </button>
        </div>
        <div className="col-auto">
          <button className="btn lab-red-button" 
          onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
        </div>
      </form>
    </li>
  );
}
export default TodoItem;