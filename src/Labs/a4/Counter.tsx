import React, { useState } from "react";
function Counter() {
    const [count, setCount] = useState(7);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button className="btn lab-green-button wd-button-space"
        onClick={() => setCount(count + 1)}>
        Up
      </button>
      <button className="btn lab-red-button wd-button-space"
        onClick={() => setCount(count - 1)}>
        Down
      </button>
    </div>
  );
}
export default Counter;