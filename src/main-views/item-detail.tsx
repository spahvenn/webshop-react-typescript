import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ShoppingCartAmountBtnContainer from '../components/shopping-cart-amount-button/shopping-cart-amount-button';
import { connect } from 'react-redux';
import { Item, ShoppingCartItem } from '../types/types';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../redux/reducers';
import { ItemSpecs } from '../components/item-specs';
import {
  addItemToShoppingCart,
  removeItemFromShoppingCart
} from '../redux/actions';

type routeProps = { itemId: string };
type OwnProps = {
  shoppingCartItems: ShoppingCartItem[];
  addItemToShoppingCart?: (id: string) => void;
  removeItemFromShoppingCart?: (id: string) => void;
};

const ItemDetail: React.FC<RouteComponentProps<routeProps> & OwnProps> = p => {
  const [item, setItem] = useState<Item>(null);
  const itemId = p.match.params.itemId;

  useEffect(() => {
    (async () => {
      const result = await Axios.get(
        process.env.PUBLIC_URL + '/phones-data/' + itemId + '.json'
      );
      setItem(result.data);
    })();
  }, [itemId]);

  if (!item) {
    return <div>loading ...</div>;
  }

  let itemAmount = 0;
  if (p.shoppingCartItems) {
    let itemData = p.shoppingCartItems.find(item => {
      return item.phoneId === itemId;
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
            <img src={process.env.PUBLIC_URL + '/' + item.images[0]} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <h1>{item.name}</h1>

          <p>{item.description}</p>

          <div>
            <p id="phone-detail-price">Price: {item.price}</p>
            <ShoppingCartAmountBtnContainer itemId={itemId} btnType="remove" />
            <ShoppingCartAmountBtnContainer itemId={itemId} btnType={'add'} />
            {itemAmount > 0 && (
              <p className="bg-info">Products in cart: {itemAmount}</p>
            )}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h2 className="specs-title">Specifications</h2>
        </div>
      </div>
      <ItemSpecs item={item} />
    </div>
  );
};

const mapStateToProps = (store: RootState) => ({
  shoppingCartItems: store.shoppingCartState.shoppingCartItems
});

const PhoneDetailContainer = connect(mapStateToProps, {})(ItemDetail);

export default PhoneDetailContainer;
