import React from 'react';
import NavBar from './NavBar';
import LoginForm from './LoginForm';
import ItemHistory from './ItemHistory';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from './ProductList'
import ItemCard from './ItemCard';
import ItemAdder from './ItemAdder';
import SearchResult from './SearchResult';

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={LoginForm} />
      <Route path="/itemcard/:id" exact component={props => <NavBar><ItemCard itemId={props.match.params.id}/></NavBar>} />
      <Route path="/main" component={() => <NavBar><ProductList /></NavBar>} />
      <Route path="/add" component={() => <NavBar><ItemAdder /></NavBar>} />
      <Route path="/search" component={() => <NavBar><SearchResult /></NavBar>} />
      <Route path="/itemhistory/:id" exact component={props => <NavBar><ItemHistory itemId={props.match.params.id}/></NavBar>} />
    </Router>
  );
}