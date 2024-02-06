import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todo: "Todo msg", completed: false }],
  addToDo: (todo) => {},
  updateToDo: (id, todo) => {},
  deleteToDo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
