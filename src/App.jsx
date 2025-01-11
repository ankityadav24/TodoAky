// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles.css'; // Make sure this file exists and has the styles provided earlier.

const App = () => {
  // State to manage tasks
  const [tasks, setTasks] = useState(() => {
    // Load tasks from local storage on initial render
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Function to add a new task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(), // Unique ID for the task
      text,
      completed: false, // Task is not completed initially
    };
    setTasks([...tasks, newTask]);
  };

  // Function to toggle task completion
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Calculate pending and completed tasks
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="app">
      <h1>To-Do List</h1>
      {/* Task Form for adding new tasks */}
      <TaskForm addTask={addTask} />
      {/* Task List for displaying all tasks */}
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
      {/* Task Counter */}
      <div className="task-counter">
        <p>Pending Tasks: {pendingTasks}</p>
        <p>Completed Tasks: {tasks.length - pendingTasks}</p>
      </div>
    </div>
  );
};

export default App;
