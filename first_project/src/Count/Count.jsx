import React, { useEffect, useState } from "react";
import Buton from "./Buton";

function Count() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("count"));
    setCount(data);
  }, []);
  return (
    <>
      <h1>{count}</h1>
      <Buton count={count} setCount={setCount} />
    </>
  );
}

export default Count;
