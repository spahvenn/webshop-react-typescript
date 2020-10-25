import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './main-views/about.component';
import Main from './main-views/main.component';
import Home from './main-views/home.component';
import Phones from './main-views/phones.component';
import ShoppingCartContainer from './main-views/shopping-cart.component';
import PhoneDetailContainer from './main-views/phone-detail.component';

const App: React.FC = () => {
  return (
    <Router>
      <Main>
        <Route path="/" exact component={Home} />
        <Route path="/phones" exact component={Phones} />
        <Route path="/phones/:phoneId" component={PhoneDetailContainer} exact />
        <Route path="/shopping-cart" exact component={ShoppingCartContainer} />
        <Route path="/about" exact component={About} />
      </Main>
    </Router>
  );
};

export default App;
