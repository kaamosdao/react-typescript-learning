import React, { useState } from 'react';
import { TaskFormProps } from '../interfaces';

const TasksForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="container mt1">
      <div className="input-field mx1">
        <i className="material-icons prefix">mode_edit</i>
        <input
          id="task"
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
          value={title}
          type="text"
        ></input>
        <label htmlFor="task" className="active">
          Task
        </label>
      </div>
    </div>
  );
};

export default TasksForm;
