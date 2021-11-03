import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home}  />
          <Route path="/login" component={Login}  />
        </Switch>
      </div>
    </Router>
  );
}

export default App;