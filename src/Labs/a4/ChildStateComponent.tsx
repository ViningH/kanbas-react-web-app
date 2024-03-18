import "./index.css";
function ChildStateComponent({ counter, setCounter }:
    { counter: number;
      setCounter: (counter: number) => void;}) {
      return (
        <div>
          <h3>Counter {counter}</h3>
          <button className = "btn lab-green-button wd-button-space" onClick={() => setCounter(counter + 1)}>
            Increment</button>
          <button className = "btn lab-red-button wd-button-space" onClick={() => setCounter(counter - 1)}>
            Decrement</button>
        </div>
      );
    }
    export default ChildStateComponent;