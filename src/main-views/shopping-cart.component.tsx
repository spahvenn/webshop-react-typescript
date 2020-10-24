import React, { useEffect, useState } from 'react';
import ShoppingCartItems from '../components/shopping-cart-items/shopping-cart-items.component';
import { connect } from 'react-redux';
import Axios from 'axios';
import { shoppingCartItemAmountSelector } from '../redux/selectors/selectors';
import { Link } from 'react-router-dom';
import shoppingCartUtils from '../utils/shopping-cart-utils';
import { AmountItem, Item, ShoppingCartItem } from '../types/types';
import { RootState } from '../redux/reducers';

const ShoppingCart: React.FC<mapToStateProps> = p => {
  const [phones, setPhones] = useState<AmountItem[]>([]);

  useEffect(() => {
    // Fetch complete item data from backend matching shopping cart's ids
    let shoppingCartItems = [...p.shoppingCartItems];
    const shoppingCartItemIds = shoppingCartItems.map(
      shoppingCartItem => shoppingCartItem.phoneId
    );
    const promises: any[] = [];
    shoppingCartItemIds.forEach(itemId => {
      promises.push(
        Axios.get(process.env.PUBLIC_URL + '/phones-data/' + itemId + '.json')
      );
    });
    (async () => {
      const responses = await Promise.all(promises);
      let items: Item[] = [];
      responses.forEach(response => {
        items.push(response.data);
        let amountItems: AmountItem[] = items.map(item => {
          const foundShoppingCartItem: ShoppingCartItem = shoppingCartItems.find(
            shoppingCartItem => item.id === shoppingCartItem.phoneId
          );
          return Object.assign({}, item, {
            amount: foundShoppingCartItem.amount
          }) as AmountItem;
        });
        setPhones(amountItems);
      });
    })();
  }, [p.shoppingCartItems]);

  if (phones.length === 0) {
    return <div></div>;
  }

  let totalPrice = shoppingCartUtils.calculateTotalPrice(phones);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h1>Shopping Cart</h1>
          <p className={p.shoppingCartItemAmount === 0 ? 'hidden' : ''}>
            Your shopping cart items:
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-9">
          <div className={p.shoppingCartItemAmount > 0 ? 'hidden' : ''}>
            Your shopping cart is empty! Browse our{' '}
            <Link to="/phones">products</Link>.
          </div>
          <ShoppingCartItems shoppingCartItems={phones} />
          {p.shoppingCartItemAmount > 0 && (
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

type mapToStateProps = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (store: RootState) => ({
  shoppingCartItems: store.shoppingCartState.shoppingCartItems,
  shoppingCartItemAmount: shoppingCartItemAmountSelector(store)
});

export default connect(mapStateToProps)(ShoppingCart);
