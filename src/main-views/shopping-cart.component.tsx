import React from 'react';
import ShoppingCartItems from '../components/shopping-cart/shopping-cart-items.component';
import { connect } from 'react-redux';
import _ from 'underscore';
import Axios from 'axios';
import { shoppingCartItemAmountSelector } from '../redux/selectors/selectors';
import { Link } from 'react-router-dom';
import shoppingCartUtils from '../utils/shopping-cart-utils';

interface OwnProps {
  shoppingCartItems: any[];
  shoppingCartItemAmount: number;
}

interface OwnState {
  phones: any[];
}

class ShoppingCart extends React.PureComponent<OwnProps, OwnState> {
  componentDidMount() {
    let shoppingCartItems = this.props.shoppingCartItems.slice();

    var itemIds = _.pluck(shoppingCartItems, 'phoneId');
    let promises: any[] = [];

    _.each(itemIds, function(itemId) {
      promises.push(
        Axios.get(process.env.PUBLIC_URL + '/phones-data/' + itemId + '.json')
      );
    });

    Promise.all(promises).then(responses => {
      let phones: any[] = [];
      _.each(responses, response => {
        phones.push(response.data);
        let extendedShoppingCartItems = _.filter(phones, phone => {
          return _.find(shoppingCartItems, item => {
            if (phone.id === item.phoneId) {
              phone.amount = item.amount;
              return true;
            }
          });
        });
        this.setState({
          phones: extendedShoppingCartItems
        });
      });
    });
  }

  render() {
    if (!this.state) {
      return <div></div>;
    }

    let totalPrice = shoppingCartUtils.calculateTotalPrice(this.state.phones);

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
            <ShoppingCartItems shoppingCartItems={this.state.phones} />
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
