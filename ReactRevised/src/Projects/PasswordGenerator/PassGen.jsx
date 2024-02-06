import React, { useState, useCallback, useEffect, useRef } from "react";

function PassGen() {
  let [length, setLength] = useState(8);
  let [numallow, setNumAllow] = useState(false);
  let [charllow, setCharAllow] = useState(false);
  let [pass, setPass] = useState("");

  //   UseRef.....

  const passRef = useRef(null);

  const passGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numallow) str += "0123456789";
    if (charllow) str += "!@#$%^&*_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      password += str.charAt(char);
    }

    setPass(password);
  }, [length, numallow, charllow, setPass]);

  const copyPassToClip = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  useEffect(() => {
    passGenerator();
  }, [length, numallow, charllow, passGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-10 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full px-3 py-3 my-4 "
            placeholder="Password"
            readOnly
            ref={passRef}
          />

          <button
            onClick={copyPassToClip}
            className="outline-none h-auto rounded-md m-3 bg-blue-600 text-white py-0.5 shrink-0 "
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e?.target?.value)}
            />
            <label htmlFor="length">length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberinput"
              defaultChecked={numallow}
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberinput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="charinput"
              defaultChecked={charllow}
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="charinput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PassGen;
