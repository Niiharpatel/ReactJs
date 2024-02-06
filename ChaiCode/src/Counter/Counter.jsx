import React, { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter: {count}</h1> <br />
      <button onClick={() => setCount(count + 1)}>Add</button> <br />
      <button onClick={() => setCount(count - 1)}>Remove</button>
    </>
  );
}
