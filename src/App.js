import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';


export default () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}