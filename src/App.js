import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Provider from "./components/Provider";
import RoutesPrivate from "./components/Routes/Private/Private";
import Home from './Pages/Home';
import Login from './Pages/Login';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div>
        <Provider>
          <Switch>
            <RoutesPrivate path="/" exact component={Home}  />
            <Route path="/login" component={Login}  />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}

export default App;