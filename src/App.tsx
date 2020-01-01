import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './main-views/about.component';
import Main from './main-views/main.component';
import Home from './main-views/home.component';
import Phones from './main-views/phones.component';
import PhoneDetail from './main-views/phone-detail.component';
import ShoppingCart from './main-views/shopping-cart.component';

const App: React.FC = () => {
  return (
    <Router>
      <Main>
        <Route path="/home" exact component={Home} />
        <Route path="/phones" exact component={Phones} />
        <Route path="/phones/:phoneId" component={PhoneDetail} exact />
        <Route path="/shopping-cart" exact component={ShoppingCart} />
        <Route path="/about" exact component={About} />
      </Main>
    </Router>
  );
};

export default App;
