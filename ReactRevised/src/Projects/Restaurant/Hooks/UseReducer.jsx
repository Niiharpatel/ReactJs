import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "INC") {
    state += 1;
  }
  if (state > 0 && action.type === "DEC") {
    state -= 1;
  }
  return state;
};

const UseReducer = () => {
  const initialData = 0;
  const [state, dispatch] = useReducer(reducer, initialData);
  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({ type: "INC" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>
        <div class="button2" onClick={() => dispatch({ type: "DEC" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECREMENT
        </div>
      </div>
    </>
  );
};

export default UseReducer;
