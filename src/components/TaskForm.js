

import React, { useState } from 'react';
import './Taskform.css'; 

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ title, status });
    setTitle('');
    setStatus('To Do');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input 
        type="text" 
        placeholder="Task Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <button type="submit" className="add-task-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
