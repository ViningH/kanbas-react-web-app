import "./index.css";
function ClickEvent() {
    const hello = () => {
      alert("Hello World!");
    };
    const lifeIs = (good: string) => {
      alert(`Life is ${good}`);
    };
    return (
      <div>
        <h2>Click Event</h2>
        <button onClick={hello} className="btn btn-primary wd-button-space">
          Click Hello</button>
        <button onClick={() => lifeIs("Good!")} className="btn btn-primary wd-button-space">
          Click Good</button>
        <button className="btn btn-primary wd-button-space"
          onClick={() => {
            hello();
            lifeIs("Great!");
          }}
        >
          Click Hello 3
        </button>
      </div>
    );
  }
  export default ClickEvent;