import React from 'react';
import '../App.css';

export default function ButtonCom({ direction, clickHandler, children }) {
  return (
    <>
      <button onClick={clickHandler} title={children}>
        {direction}
      </button>
    </>
  );
}
