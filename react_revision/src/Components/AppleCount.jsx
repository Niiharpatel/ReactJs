import React, { useState } from 'react';
import ButtonCom from './ButtonCom';
import Basket from './Basket';

function AppleCount() {
  const totalAppleCount = 10;

  const [rightCount, setRightCount] = useState(0);
  const [leftCount, setLeftCount] = useState(totalAppleCount - rightCount);

  const leftClickHandler = () => {
    if (rightCount > 0) {
      setRightCount(rightCount - 1);
      setLeftCount(leftCount + 1);
    }
  };

  const rightClickHandler = () => {
    if (leftCount > 0) {
      setRightCount(rightCount + 1);
      setLeftCount(leftCount - 1);
    }
  };
  return (
    <>
      <h1 className="heading" style={{ textAlign: 'center' }}>
        AppleCounter
      </h1>
      <div className="main">
        <Basket appleCount={leftCount} basketName="Basket 1" />
        <ButtonCom clickHandler={leftClickHandler} direction="Left">
          Left Arrow
        </ButtonCom>
        <ButtonCom clickHandler={rightClickHandler} direction="Right">
          Right Arrow
        </ButtonCom>
        <Basket appleCount={rightCount} basketName="Basket 2" />
      </div>
    </>
  );
}

export default AppleCount;
