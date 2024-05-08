import React from 'react';

function Basket({ appleCount, basketName }) {
  return (
    <>
      <div>
        <h2>{appleCount} apples</h2>
        <p>
          {basketName}&nbsp;
          {appleCount === 10 && '(full)'}
          {appleCount === 0 && '(empty)'}
        </p>
      </div>
    </>
  );
}

export default Basket;
