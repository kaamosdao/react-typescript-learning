import React, { useState, useEffect } from 'react';
import { ITask } from '../interfaces';
import TasksForm from './TaskForm';
import TaskList from './TaskList';

const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks') || '[]') as ITask[];
    setTasks(saved);
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  const addHandler = (title: string) => {
    const newTask: ITask = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const deleteHandler = (id: number) => {
    const shouldDelete = window.confirm(
      'Gonna remove this task, are you sure?'
    );
    if (shouldDelete) {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="container mt1">
      <TasksForm onAdd={addHandler} />
      <TaskList
        tasks={tasks}
        toggleHandler={toggleHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

export default TasksPage;
