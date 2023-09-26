// Task.js
import React from 'react';

const Task = ({ task, editTask, deleteTask, completeTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <button onClick={() => editTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task)}>Delete</button>
      <button onClick={() => completeTask(task)}>Complete</button>
    </div>
  );
};

export default Task;
