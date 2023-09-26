// TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, editTask, deleteTask, completeTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
