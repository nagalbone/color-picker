import { useState } from "react";

const App = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
    </div>
  );
};

export default App;
