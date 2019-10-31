import React from 'react';
import NavBar from './NavBar';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {

  return (
    <div>
      <Router>
      <Route path="/" exact component={LoginForm} />
      <Route path="/else" component={() => <NavBar>SOMETHING...</NavBar>} />
     
      </Router>
    </div>
  );
}