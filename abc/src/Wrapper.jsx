import React from 'react';
import { Provider } from 'react-redux';
import User from './User';
import { store } from './App/Store';

function Wrapper() {
  return (
    <>
      <Provider store={store}>
        <User />
      </Provider>
    </>
  );
}

export default Wrapper;
