import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './main-views/about.component';
import Main from './main-views/main.component';
import Home from './main-views/home.component';
import Items from './main-views/items.component';
import ShoppingCartContainer from './main-views/shopping-cart.component';
import PhoneDetailContainer from './main-views/item-detail.component';
import { ROUTES } from './utils/routes';

const App: React.FC = () => {
  return (
    <Router>
      <Main>
        <Route path="/" exact component={Home} />
        <Route path={ROUTES.PRODUCTS} exact component={Items} />
        <Route path={ROUTES.PRODUCT} component={PhoneDetailContainer} exact />
        <Route
          path={ROUTES.SHOPPING_CART}
          exact
          component={ShoppingCartContainer}
        />
        <Route path={ROUTES.ABOUT} exact component={About} />
      </Main>
    </Router>
  );
};

export default App;
