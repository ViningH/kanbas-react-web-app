import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";
import { increment, decrement } from "./counterReducer";
import "../../index.css";
function CounterRedux() {
  const { count } = useSelector((state: LabState) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <button className = "btn lab-green-button wd-button-space" 
      onClick={() => dispatch(increment())}> Increment </button>
      <button className = "btn lab-red-button wd-button-space" 
      onClick={() => dispatch(decrement())}> Decrement </button>
    </div>
  );
}
export default CounterRedux;