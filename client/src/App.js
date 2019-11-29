import React from 'react';
import NavBar from './NavBar';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from './ProductList'
import ItemCard from './ItemCard';
import ItemAdder from './ItemAdder';

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={LoginForm} />
      <Route path="/itemcard/:id" exact component={props => <NavBar><ItemCard itemId={props.match.params.id}/></NavBar>} />
      <Route path="/main" component={() => <NavBar><ProductList /></NavBar>} />
      <Route path="/add" component={() => <NavBar><ItemAdder /></NavBar>} />
    </Router>
  );
}