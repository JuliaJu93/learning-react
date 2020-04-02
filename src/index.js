import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";


import Head from './components/head';
import Home from './components/home';
import News from './components/news';
import Profile from './components/profile';
import Login from './components/login';

import './index.css';

const Main = () => {
  return (
    <Router>
      <Head />
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
    </main>
    </Router>
  );
};

ReactDOM.render(<Main />,
  document.getElementById('root'));
