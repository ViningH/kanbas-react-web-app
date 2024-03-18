import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { LabState } from "../../../store";

function TodoForm() {
    const { todo } = useSelector((state: LabState) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item">
            <form className="row g-3">
                <div className="col-auto">
                    <input
                        className="form-control"
                        value={todo.title}
                        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
                    />
                </div>
                <div className="col-auto">
                    <button className="btn lab-yellow-button"
                        onClick={() => dispatch(updateTodo(todo))}> Update </button>
                </div>
                <div className="col-auto">
                    <button className="btn lab-green-button"
                        onClick={() => dispatch(addTodo(todo))}> Add </button>
                </div>
            </form>
        </li>
    );
}
export default TodoForm;