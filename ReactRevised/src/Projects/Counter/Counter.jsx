import React, { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  const addValue = () => {
    // setCount(count + 1);

    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);

    if (count >= 20) {
      setCount(count);
    }
  };

  const delValue = () => {
    setCount(count - 1);

    if (count <= 0) {
      setCount(count);
    }
  };

  return (
    <>
      <h1>counter : {count}</h1>
      <button
        className="bg-blue-800 rounded-xl text-white"
        onClick={addValue}
        style={{ margin: "20px", padding: "10px" }}
      >
        Add
      </button>
      <button
        className="bg-green-800 rounded-xl text-white"
        style={{ padding: "10px" }}
        onClick={delValue}
      >
        remove
      </button>
    </>
  );
}
