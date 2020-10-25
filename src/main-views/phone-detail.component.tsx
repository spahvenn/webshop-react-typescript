import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ShoppingCartAmountBtn from '../components/shopping-cart-items/shopping-cart-amount-btn';
import { connect } from 'react-redux';
import { Item, ShoppingCartItem } from '../types/types';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../redux/reducers';
import { PhoneSpecs } from '../components/phone-specs';
import {
  addItemToShoppingCart,
  removeItemFromShoppingCart
} from '../redux/actions';

type routeProps = { phoneId: string };
type OwnProps = {
  shoppingCartItems: ShoppingCartItem[];
  addItemToShoppingCart?: (id: string) => void;
  removeItemFromShoppingCart?: (id: string) => void;
};

const PhoneDetail: React.FC<RouteComponentProps<routeProps> & OwnProps> = p => {
  const [phone, setPhone] = useState<Item>(null);
  const phoneId = p.match.params.phoneId;

  useEffect(() => {
    (async () => {
      const result = await Axios.get(
        process.env.PUBLIC_URL + '/phones-data/' + phoneId + '.json'
      );
      setPhone(result.data);
    })();
  }, [phoneId]);

  if (!phone) {
    return <div>loading ...</div>;
  }

  let itemAmount = 0;
  if (p.shoppingCartItems) {
    let itemData = p.shoppingCartItems.find(item => {
      return item.phoneId === phoneId;
    });
    if (itemData) {
      itemAmount = itemData.amount;
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="phone-images">
            <img src={process.env.PUBLIC_URL + '/' + phone.images[0]} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <h1>{phone.name}</h1>

          <p>{phone.description}</p>

          <div>
            <p id="phone-detail-price">Price: {phone.price}</p>
            <ShoppingCartAmountBtn
              phoneId={phoneId}
              btnType={'add'}
              addItemToShoppingCart={p.addItemToShoppingCart}
            />
            <ShoppingCartAmountBtn
              phoneId={phoneId}
              btnType={'remove'}
              removeItemFromShoppingCart={p.removeItemFromShoppingCart}
            />
            <p className="bg-info">Products in cart: {itemAmount}</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h2 className="specs-title">Specifications</h2>
        </div>
      </div>
      <PhoneSpecs phone={phone} />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addItemToShoppingCart: (id: string) => dispatch(addItemToShoppingCart(id)),
  removeItemFromShoppingCart: (id: string) =>
    dispatch(removeItemFromShoppingCart(id))
});

const mapStateToProps = (store: RootState) => ({
  shoppingCartItems: store.shoppingCartState.shoppingCartItems
});

const PhoneDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneDetail);

export default PhoneDetailContainer;
