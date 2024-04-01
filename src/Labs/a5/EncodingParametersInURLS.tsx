import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [result, setResult] = useState(0);
  const fetchSum = async (a: number, b: number) => {
    const response = await
      axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a: number, b: number) => {
    const response = await axios.get(
      `http://localhost:4000/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };

  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>
      <h4>Calculator</h4>
      <input type="number" className="form-control lab-input-space lab-input" value={a}
        onChange={(e) => setA(parseInt(e.target.value))} />
      <input type="number" className="form-control lab-input-space lab-input"
        onChange={(e) => setB(parseInt(e.target.value))} value={b} />
        <input value={result} type="number" className="form-control lab-input-space lab-input" readOnly />
      <h3>Fetch Result</h3>
      <button className="btn btn-primary wd-button-space" onClick={() => fetchSum(a, b)} >
        Fetch Sum of {a} + {b}
      </button>
      <button className="btn btn-danger wd-button-space" onClick={() => fetchSubtraction(a, b)} >
        Fetch Subtraction of {a} - {b}
      </button>
      <h3>Path Parameters</h3>
      <a className="btn btn-primary wd-button-space" href={`http://localhost:4000/a5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <a className="btn btn-danger wd-button-space" href={`http://localhost:4000/a5/subtract/${a}/${b}`}>
        Subtract {a} - {b}
      </a>
      <a className="btn lab-green-button wd-button-space" href={`http://localhost:4000/a5/multiply/${a}/${b}`}>
        Multiply {a} * {b}
      </a>
      <a className="btn lab-yellow-button wd-button-space" href={`http://localhost:4000/a5/divide/${a}/${b}`}>
        Divide {a} % {b}
      </a>
      <h3>Query Parameters</h3>
      <a className="btn btn-primary wd-button-space"
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      <a className="btn btn-danger wd-button-space"
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
        Subtract {a} - {b}
      </a>
      <a className="btn lab-green-button wd-button-space"
        href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
        Multiply {a} * {b}
      </a>
      <a className="btn lab-yellow-button wd-button-space"
        href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}>
        Divide {a} % {b}
      </a>
    </div>
  );
}
export default EncodingParametersInURLs;