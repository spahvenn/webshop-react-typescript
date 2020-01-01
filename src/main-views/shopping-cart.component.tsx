import React from 'react';
import ShoppingCartItems from '../components/shopping-cart-items/shopping-cart-items.component';
import { connect } from 'react-redux';
import _ from 'underscore';
import Axios from 'axios';
import { shoppingCartItemAmountSelector } from '../redux/selectors/selectors';
import { Link } from 'react-router-dom';
import shoppingCartUtils from '../utils/shopping-cart-utils';
import { AmountItem, Item, ShoppingCartItem } from '../types/types';

interface OwnProps {
  shoppingCartItems: ShoppingCartItem[];
  shoppingCartItemAmount: number;
}

interface OwnState {
  items: AmountItem[];
}

class ShoppingCart extends React.PureComponent<OwnProps, OwnState> {
  componentDidMount() {
    let shoppingCartItems = this.props.shoppingCartItems.slice();

    var shoppingCartItemIds = _.pluck(shoppingCartItems, 'phoneId');
    let promises: any[] = [];

    _.each(shoppingCartItemIds, function(itemId) {
      promises.push(
        Axios.get(process.env.PUBLIC_URL + '/phones-data/' + itemId + '.json')
      );
    });

    Promise.all(promises).then(responses => {
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
        this.setState({
          items: amountItems
        });
      });
    });
  }

  render() {
    if (!this.state) {
      return <div></div>;
    }

    let totalPrice = shoppingCartUtils.calculateTotalPrice(this.state.items);

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>Shopping Cart</h1>
            <p
              className={
                this.props.shoppingCartItemAmount === 0 ? 'hidden' : ''
              }
            >
              Your shopping cart items:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <div
              className={this.props.shoppingCartItemAmount > 0 ? 'hidden' : ''}
            >
              Your shopping cart is empty! Browse our{' '}
              <Link to="/phones">products</Link>.
            </div>
            <ShoppingCartItems shoppingCartItems={this.state.items} />
            {this.props.shoppingCartItemAmount > 0 && (
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
  }
}

const mapStateToProps = function(store: any) {
  return {
    shoppingCartItems: store.shoppingCartState.shoppingCartItems,
    shoppingCartItemAmount: shoppingCartItemAmountSelector(store)
  };
};

export default connect(mapStateToProps)(ShoppingCart);
