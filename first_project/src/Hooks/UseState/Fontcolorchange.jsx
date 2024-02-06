import React, { useState } from "react";

function Fontcolorchange() {
  const [textcolor, setTextcolor] = useState("red");

  function changeColor() {
    setTextcolor("green");
  }

  return (
    <div>
      <h1 style={{ color: textcolor }}>My name is Niihar</h1>
      <button onClick={() => changeColor()}>Click Here</button>
    </div>
  );
}

export default Fontcolorchange;
