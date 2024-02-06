import React, { useState } from "react";

function BodyColorChange() {
  let [color, setColor] = useState("violet");
  return (
    <>
      <div className="w-full h-screen " style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12 bg-white rounded-xl">
          <button
            onClick={() => setColor("green")}
            className="bg-green-600 m-3 rounded-xl p-2 "
          >
            Green
          </button>
          <button
            onClick={() => setColor("red")}
            className="bg-red-600 m-3 rounded-xl p-2"
          >
            Red
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="bg-yellow-600 m-3 rounded-xl p-2"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-600 m-3 rounded-xl p-2"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("black")}
            className="bg-black m-3 rounded-xl p-2 text-white"
          >
            Black
          </button>
          <button
            onClick={() => setColor("purple")}
            className="bg-purple-600 m-3 rounded-xl p-2"
          >
            Purple
          </button>
          <button
            onClick={() => setColor("pink")}
            className="bg-pink-600 m-3 rounded-xl p-2"
          >
            Pink
          </button>
        </div>
      </div>
    </>
  );
}

export default BodyColorChange;
