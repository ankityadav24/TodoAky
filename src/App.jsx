import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles.css';
import logo from './assets/akylogo.jpeg';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false, 
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="app">
          <img src={logo} alt="Logo" className="logo" />
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
      <div className="task-counter">
        <p>Pending Tasks: {pendingTasks}</p>
        <p>Completed Tasks: {tasks.length - pendingTasks}</p>
      </div>
    </div>
  );
};

export default App;
