

import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onStatusChange, onDelete, onEditTitle }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onStatusChange={onStatusChange} 
          onDelete={onDelete} 
          onEditTitle={onEditTitle} 
        />
      ))}
    </div>
  );
};

export default TaskList;
