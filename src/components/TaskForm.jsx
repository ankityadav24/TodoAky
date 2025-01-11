import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      setError("please  task cannot be empty  ");
      return;
    }
    setError("");
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className="task-form">

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="task-input"
      />

      <button type="submit" className="add-task-btn">Add</button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default TaskForm;
