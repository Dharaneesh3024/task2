import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [rem, setRem] = useState("");

  function Add() {
    if (task.trim()) {
      setTodos((prevTodos) => [...prevTodos, task]);
      setTask("");
    }
  }

  function Remove() {
    if (rem.trim()) {
      setTodos((prevTodos) => {
        if (Array.isArray(prevTodos)) {
          return prevTodos.filter((todo) => todo !== rem); // Remove the task
        }
        return [];
      });
      setRem(""); // Clear the remove input field
    }
  }

  return (
    <div className="todo-container">
      <h2 className="title">To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="input-field"
        /><br/>
        <button onClick={Add} className="add-button">Add Task</button><br/><br/><br/>
      </div>
      <div className="remove-container">
        <input
          type="text"
          value={rem}
          onChange={(e) => setRem(e.target.value)}
          placeholder="Task to remove"
          className="input-field"
        /><br/>
        <button onClick={Remove} className="remove-button">Remove Task</button>
      </div>
      <ul className="todo-list">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <li key={index} className="todo-item">{todo}</li>
          ))
        ) : (
          <li className="no-tasks">No tasks available</li>
        )}
      </ul>
    </div>
  );
}
