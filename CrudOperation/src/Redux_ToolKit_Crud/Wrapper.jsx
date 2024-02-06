import React from "react";
import { Provider } from "react-redux";
import { store } from "./App/store";
import User from "./User/User";

export default function Wrapper() {
  return (
    <>
      <Provider store={store}>
        <User />
      </Provider>
    </>
  );
}
