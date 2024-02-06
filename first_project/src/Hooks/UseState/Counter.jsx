import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click</button> <br />
      <h1>{count}</h1>
    </>
  );
}

export default Counter;
