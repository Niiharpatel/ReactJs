import React from "react";

function Buton({ count, setCount }) {
  function addFun() {
    setCount(count + 1);
    localStorage.setItem("count", JSON.stringify(count));
  }
  return (
    <dv>
      <button onClick={() => addFun()}>Add</button>
    </dv>
  );
}

export default Buton;
