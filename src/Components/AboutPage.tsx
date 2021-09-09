import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <div className="container center mt1">
      <div className="card ">
        <div className="card-content">
          <span className="card-title">About this app</span>
          <p>
            This is very simple application, made only to learn React with
            Typescript. You can add tasks you want to accomplish, also
            distinguish completed tasks and delete any of them.
          </p>
          <p>Hope tou enjoy it!</p>
        </div>
      </div>
      <button className="btn" onClick={() => history.push('/tasks')} >Back to tasks</button>
    </div>
  );
};

export default AboutPage;
