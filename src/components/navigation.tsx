import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { shoppingCartItemAmountSelector } from '../redux/selectors/selectors';
import { RootState } from '../redux/reducers';
import { ROUTES } from '../utils/routes';

interface OwnProps {
  shoppingCartItemAmount: number;
}

const Navigation: React.FC<OwnProps> = ({ shoppingCartItemAmount }) => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">
            Webshop
          </Link>
        </div>
        <div
          id="navbar"
          className="navbar-collapse collapse"
          aria-expanded="false"
          style={{ height: '1px' }}
        >
          <ul className="nav navbar-nav">
            <li>
              <Link to={ROUTES.PRODUCTS}>Products</Link>
            </li>
            <li>
              <Link to={ROUTES.SHOPPING_CART}>
                Shopping Cart
                <span
                  className="glyphicon glyphicon-shopping-cart"
                  aria-hidden="true"
                ></span>
                <span id="shopping-cart-item-amount">
                  {shoppingCartItemAmount}
                </span>
              </Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (store: RootState) => ({
  shoppingCartItemAmount: shoppingCartItemAmountSelector(store)
});

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;
