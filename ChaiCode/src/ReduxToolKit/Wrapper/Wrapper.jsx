import React from "react";
import AddTodo from "../Components/AddTodo";
import Todos from "../Components/Todos";
import { Provider } from "react-redux";
import { store } from "../App/store";

function Wrapper() {
  return (
    <>
      <Provider store={store}>
        <AddTodo />
        <Todos />
      </Provider>
    </>
  );
}

export default Wrapper;
