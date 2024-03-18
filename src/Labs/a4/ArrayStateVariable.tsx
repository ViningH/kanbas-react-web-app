import React, { useState } from "react";
function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div>
      <h2>Array State Variable</h2>
      <button className="btn lab-green-button wd-button-space" onClick={addElement}>Add Element</button>
      <ul className="lab-ul-style">
        {array.map((item, index) => (
          <li className = "lab-list-style" key={index}>
            {item}
            <span className="move-right">
            <button className="btn lab-red-button wd-button-space" onClick={() => deleteElement(index)}>
              Delete</button>
              </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayStateVariable;