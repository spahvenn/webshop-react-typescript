import React from 'react';
import { Link } from 'react-router-dom';
import { AmountItem } from '../types/types';
import { ROUTES } from '../utils/routes';
import ShoppingCartAmountBtnContainer from './shopping-cart-amount-button/shopping-cart-amount-button';

interface OwnProps {
  shoppingCartItems: AmountItem[];
}

const ShoppingCartItems: React.FC<OwnProps> = ({ shoppingCartItems }) => {
  if (!shoppingCartItems) {
    return <div></div>;
  }
  return (
    <div>
      <div>
        {shoppingCartItems.map(item => (
          <div key={item.id} className="thumbnail row">
            <div className="col-md-2">
              <Link to={'phones/' + item.id}>
                <img
                  src={process.env.PUBLIC_URL + '/' + item.images[0]}
                  alt={item.name}
                />
              </Link>
            </div>
            <div className="col-md-8">
              <Link to={`${ROUTES.PRODUCTS}/${item.id}`}>{item.name}</Link>
              <p>{item.description}</p>
            </div>

            <div className="col-md-2 bg-info">
              <p>
                Price: {item.amount} x {item.price} €
              </p>
              <p>
                Total:{' '}
                <span className="amount">{item.amount * item.price} €</span>
              </p>
              <p>
                <ShoppingCartAmountBtnContainer
                  itemId={item.id}
                  btnType="remove"
                />
                <ShoppingCartAmountBtnContainer
                  itemId={item.id}
                  btnType="add"
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartItems;
