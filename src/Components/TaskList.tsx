import React, { useState } from 'react';
import { TaskListProps } from '../interfaces';

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleHandler,
  deleteHandler,
}) => {
  if (tasks.length === 0) {
    return <p className="center">Everyting is done!</p>;
  }

  return (
    <ul>
      {tasks.map((task) => {
        const classes = ['task'];
        if (task.completed) {
          classes.push('completed');
        }
        return (
          <li className={classes.join(' ')} key={task.id}>
            <label>
              <input
                type="checkbox"
                onChange={() => toggleHandler(task.id)}
                checked={task.completed}
              />
              <span>{task.title}</span>
              <a
                href="#!"
                onClick={() => deleteHandler(task.id)}
                className="secondary-content"
              >
                <i className="material-icons">delete</i>
              </a>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
