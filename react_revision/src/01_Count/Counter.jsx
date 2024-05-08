import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount((previousValue) => previousValue + 1);
    setCount((previousValue) => previousValue + 1);
    setCount((previousValue) => previousValue + 1);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          flexDirection: 'column',
        }}
      >
        <h1>Count: {count} </h1>

        <button onClick={countHandler}>Click</button>
      </div>
    </>
  );
}

export default Counter;
