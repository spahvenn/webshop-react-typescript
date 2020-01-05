import React from 'react';
import { Link } from 'react-router-dom';
import { AmountItem } from '../../types/types';

interface OwnProps {
  shoppingCartItems: AmountItem[];
}

const ShoppingCartItems: React.FC<OwnProps> = p => {
  if (!p.shoppingCartItems) {
    return <div></div>;
  }
  return (
    <div>
      <div>
        {p.shoppingCartItems.map(item => {
          return (
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
                <Link to={'phones/' + item.id}>{item.name}</Link>
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingCartItems;
