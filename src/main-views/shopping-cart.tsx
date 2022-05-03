import React, { useEffect, useState } from 'react';
import ShoppingCartItems from '../components/shopping-cart-items';
import { connect } from 'react-redux';
import { shoppingCartItemAmountSelector } from '../redux/selectors/selectors';
import { Link } from 'react-router-dom';
import { calculateTotalPrice, getItems } from '../utils/shopping-cart-utils';
import { AmountItem, ShoppingCartItem } from '../types/types';
import { RootState } from '../redux/reducers';
import { ROUTES } from '../utils/routes';

type OwnProps = {
  shoppingCartItems: ShoppingCartItem[];
  shoppingCartItemAmount: number;
};

const ShoppingCart: React.FC<OwnProps> = ({
  shoppingCartItems,
  shoppingCartItemAmount
}) => {
  const [viewItems, setViewItems] = useState<AmountItem[]>([]);

  useEffect(() => {
    // Fetch complete item data from backend matching shopping cart's item ids
    (async function() {
      const items = await getItems(shoppingCartItems);
      setViewItems(items);
    })();
  }, [shoppingCartItems]);

  let totalPrice = calculateTotalPrice(viewItems);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h1>Shopping Cart</h1>
          <p className={shoppingCartItemAmount === 0 ? 'hidden' : ''}>
            Your shopping cart items:
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-9">
          <div className={shoppingCartItemAmount > 0 ? 'hidden' : ''}>
            Your shopping cart is empty! Browse our{' '}
            <Link to={ROUTES.PRODUCTS}>products</Link>.
          </div>
          <ShoppingCartItems shoppingCartItems={viewItems} />
          {shoppingCartItemAmount > 0 && (
            <div className="row">
              <div className="col-md-12">
                <div className="pull-right" style={{ fontWeight: 'bold' }}>
                  Total: {totalPrice} €
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (store: RootState) => ({
  shoppingCartItems: store.shoppingCartState.shoppingCartItems,
  shoppingCartItemAmount: shoppingCartItemAmountSelector(store)
});

const ShoppingCartContainer = connect(mapStateToProps)(ShoppingCart);

export default ShoppingCartContainer;
