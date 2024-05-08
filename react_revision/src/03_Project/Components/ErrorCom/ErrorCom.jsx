import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorCom() {
  const error = useRouteError();
  return (
    <>
      <h1>Somthing Went Wrong: {error.statusText}</h1>
    </>
  );
}

export default ErrorCom;
