import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import "./toDo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const ToDo = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [dateTime, setDateTime] = useState("");

  // This code might create multiple intervals on each render, leading to performance issues/memory leaks.
  // setInterval(() => {
  //   const now = new Date();
  //   setDateTime(`${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`);
  // }, 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setDateTime(`${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonSubmit = (value: string) => {
    if (tasks.includes(value)) {
      return;
    }
    setTasks((prev) => [...prev, value]);
  };

  const handleDoneAction = (index: number) => {
    alert("Task marked as done!");
  }

  const handleDeleteAction = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <h3>{dateTime}</h3>
      <TodoForm onTodoAdd={handleButtonSubmit} />
      <TodoList tasks={tasks} onDone={handleDoneAction} onDelete={handleDeleteAction}/>
      <button className="clear-all-btn" onClick={() => setTasks([])}>Clear All</button>
    </div>
  );
};

export default ToDo;
