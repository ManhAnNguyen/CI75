import React, { useState } from "react";
import { FcHome } from "react-icons/fc";
import { ImHome } from "react-icons/im";
import { RiTodoFill } from "react-icons/ri";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import TaskItem from "./components/TaskItem";

const Ex2 = () => {
  const [inputValue, setInputValue] = useState("");
  const [store, setStore] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      toast.warning("Task should not be empty");
      return;
    }

    const newTask = {
      name: inputValue,
      completed: false,
      id: new Date(),
    };

    setStore([...store, newTask]);
    setInputValue("");
    toast.success("Add Success");
  };

  const handleChecked = (id) => {
    setStore(
      store.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDelete = (id) => {
    const currentTask = store.find((item) => item.id === id);
    if (!currentTask.completed) {
      toast.error("Task is not completed not allow to remove");
      return;
    }

    setStore(store.filter((item) => item.id !== id));
    toast.success("Delete Success");
  };

  console.log(store);
  return (
    <div className="todo-container">
      <h1 className="title">
        Todo List <RiTodoFill />
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task...."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="task-container">
        {store.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Ex2;
