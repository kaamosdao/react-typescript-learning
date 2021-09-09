import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AboutPage from './Components/AboutPage';
import TasksPage from './Components/TasksPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/tasks" component={TasksPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
};

export default App;
