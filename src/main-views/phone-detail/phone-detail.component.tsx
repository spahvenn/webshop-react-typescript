import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ShoppingCartAddButtonContainer from '../../components/shopping-cart-items/shopping-cart-add-button/shopping-cart-add-button';
import { connect } from 'react-redux';
import _ from 'underscore';
import { Item, ShoppingCartItem } from '../../types/types';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../redux/reducers';
import { PhoneSpecs } from './phone-specs';

type routeProps = { phoneId: string };
type OwnProps = { shoppingCartItems: ShoppingCartItem[] };

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
  }, []);

  if (!phone) {
    return <div>loading ...</div>;
  }

  let itemAmount = 0;
  if (p.shoppingCartItems) {
    let itemData = _.find(p.shoppingCartItems, item => {
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
            <ShoppingCartAddButtonContainer
              phoneId={phoneId}
            ></ShoppingCartAddButtonContainer>
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

const mapStateToProps = (store: RootState) => {
  return {
    shoppingCartItems: store.shoppingCartState.shoppingCartItems
  };
};

export default connect(mapStateToProps)(PhoneDetail);
