

import React, { useState } from 'react';
import './TaskItem.css'; 

const TaskItem = ({ task, onStatusChange, onDelete, onEditTitle }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleStatusChange = (e) => {
    onStatusChange(task.id, e.target.value);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    
    if (editedTitle !== task.title) {
      
      onEditTitle(task.id, editedTitle);
    }
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  return (
    <div className="task-item">
      {editMode ? (
        <>
          <input type="text" value={editedTitle} onChange={handleChange} />
          <button className="edit-button" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <select value={task.status} onChange={handleStatusChange}>
            <option value="To Do">To Do</option>
            <option value="Done">Done</option>
          </select>
          <button className="edit-button" onClick={handleEdit}>Edit</button>
          <button className="delete-button" onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
