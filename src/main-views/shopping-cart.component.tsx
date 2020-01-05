import React, { useEffect, useState } from 'react';
import ShoppingCartItems from '../components/shopping-cart-items/shopping-cart-items.component';
import { connect } from 'react-redux';
import _ from 'underscore';
import Axios from 'axios';
import { shoppingCartItemAmountSelector } from '../redux/selectors/selectors';
import { Link } from 'react-router-dom';
import shoppingCartUtils from '../utils/shopping-cart-utils';
import { AmountItem, Item, ShoppingCartItem } from '../types/types';

const ShoppingCart: React.FC<mapToStateProps> = p => {
  const [phones, setPhones] = useState<AmountItem[]>([]);

  useEffect(() => {
    let shoppingCartItems = p.shoppingCartItems.slice();
    var shoppingCartItemIds = _.pluck(shoppingCartItems, 'phoneId');
    let promises: any[] = [];
    _.each(shoppingCartItemIds, itemId => {
      promises.push(
        Axios.get(process.env.PUBLIC_URL + '/phones-data/' + itemId + '.json')
      );
    });
    (async () => {
      const responses = await Promise.all(promises);
      let items: Item[] = [];
      _.each(responses, response => {
        items.push(response.data);
        let amountItems: AmountItem[] = _.map(items, item => {
          const foundShoppingCartItem: ShoppingCartItem = _.find(
            shoppingCartItems,
            shoppingCartItem => {
              return item.id === shoppingCartItem.phoneId;
            }
          );
          return Object.assign({}, item, {
            amount: foundShoppingCartItem.amount
          }) as AmountItem;
        });
        setPhones(amountItems);
      });
    })();
  }, []);

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

const mapStateToProps = function(store: any) {
  return {
    shoppingCartItems: store.shoppingCartState.shoppingCartItems,
    shoppingCartItemAmount: shoppingCartItemAmountSelector(store)
  };
};

export default connect(mapStateToProps)(ShoppingCart);
