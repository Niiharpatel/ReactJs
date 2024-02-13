import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  // const [multiplied, setMultiplied] = useState(1);
  let multiplied = count * 5;

  const multipliedValue = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Count is : {count}</h1>

      <button onClick={multipliedValue}>Click to multiply by five</button>

      <h2>Multiplied Value: {multiplied}</h2>
    </>
  );
}

export default App;
