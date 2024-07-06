

import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task }]);
  };

  const changeTaskStatus = (id, status) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTaskTitle = (id, newTitle) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, title: newTitle } : task));
  };

  return (
    <div className="app">
      <h1>Task Manager  TodoList</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList 
        tasks={tasks} 
        onStatusChange={changeTaskStatus} 
        onDelete={deleteTask} 
        onEditTitle={editTaskTitle}
      />
    </div>
  );
};

export default App;
