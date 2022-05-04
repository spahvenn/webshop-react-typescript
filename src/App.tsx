import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './main-views/about';
import Main from './main-views/main';
import Home from './main-views/home';
import Items from './main-views/items';
import ShoppingCartContainer from './main-views/shopping-cart';
import ItemDetailContainer from './main-views/item-detail';
import { ROUTES } from './utils/routes';

const App: React.FC = () => {
  return (
    <Router>
      <Main>
        <Route path="/" exact component={Home} />
        <Route path={ROUTES.PRODUCTS} exact component={Items} />
        <Route path={ROUTES.PRODUCT} component={ItemDetailContainer} exact />
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
