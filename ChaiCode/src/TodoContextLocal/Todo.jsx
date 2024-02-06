import React, { useEffect, useState } from "react";
import { TodoProvider } from "./Context";
import TodoItem from "./Components/TodoItem";
import TodoForm from "./Components/TodoForm";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateToDo = (id, todo) => {
    setTodos((prev) =>
      prev?.map((prevTodo) => (prevTodo?.id === id ? todo : prevTodo))
    );
  };

  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev?.map((prevTodo) =>
        prevTodo?.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoProvider
        value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete }}
      >
        <div className="bg-[#172842] w-full h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              {/* Todo form goes here */}
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}

              {todos.map((todo) => {
                return (
                  <div key={todo?.id} className="w-full">
                    <TodoItem todo={todo} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}
