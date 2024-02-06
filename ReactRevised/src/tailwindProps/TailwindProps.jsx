import React from "react";
import Card from "../Components/Card";

export default function TailwindProps() {
  let info = {
    username: "Nihar",
    age: 24,
  };

  let arr = [1, 2, 3, 4];
  return (
    <>
      <span className="bg-green-400 text-black rounded-xl p-4">Hello</span>

      <Card name="Nihar" info={info} arr={arr} btnText="Click Me" />
    </>
  );
}
