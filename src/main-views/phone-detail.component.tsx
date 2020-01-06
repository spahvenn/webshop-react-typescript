import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ShoppingCartAddButtonContainer from '../components/shopping-cart-items/shopping-cart-add-button/shopping-cart-add-button';
import { connect } from 'react-redux';
import _ from 'underscore';
import { Item, ShoppingCartItem } from '../types/types';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../redux/reducers';

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
      <div className="specs">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-6 ">
            <span>Battery</span>
            <dl>
              <dt>Type</dt>
              <dd>{phone.battery.type}</dd>
              <dt>Talk Time</dt>
              <dd>{phone.battery.talkTime}</dd>
              <dt>Standby time (max)</dt>
              <dd>{phone.battery.standbyTime}</dd>
            </dl>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <span>Storage and Memory</span>
            <dl>
              <dt>RAM</dt>
              <dd>{phone.storage.ram}</dd>
              <dt>Internal Storage</dt>
              <dd>{phone.storage.flash}</dd>
            </dl>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <span>Connectivity</span>
            <dl>
              <dt>Network Support</dt>
              <dd>{phone.connectivity.cell}</dd>
              <dt>WiFi</dt>
              <dd>{phone.connectivity.wifi}</dd>
              <dt>Bluetooth</dt>
              <dd>{phone.connectivity.bluetooth}</dd>
              <dt>Infrared</dt>
              <dd>{phone.connectivity.infrared}</dd>
              <dt>GPS</dt>
              <dd>{phone.connectivity.gps}</dd>
            </dl>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <span>Android</span>
            <dl>
              <dt>OS Version</dt>
              <dd>{phone.android.os}</dd>
              <dt>UI</dt>
              <dd>{phone.android.ui}</dd>
            </dl>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-6 ">
            <span>Size and Weight</span>
            <dl>
              <dt>Dimensions</dt>
              <dt>Weight</dt>
              <dd>{phone.sizeAndWeight.weight}</dd>
            </dl>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <span>Display</span>
            <dl>
              <dt>Screen size</dt>
              <dd>{phone.display.screenSize}</dd>
              <dt>Screen resolution</dt>
              <dd>{phone.display.screenResolution}</dd>
              <dt>Touch screen</dt>
              <dd>{phone.display.touchScreen}</dd>
            </dl>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <span>Hardware</span>
            <dl>
              <dt>CPU</dt>
              <dd>{phone.hardware.cpu}</dd>
              <dt>USB</dt>
              <dd>{phone.hardware.usb}</dd>
              <dt>Audio / headphone jack</dt>
              <dd>{phone.hardware.audioJack}</dd>
              <dt>FM Radio</dt>
              <dd>{phone.hardware.fmRadio}</dd>
              <dt>Accelerometer</dt>
              <dd>{phone.hardware.accelerometer}</dd>
            </dl>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <span>Camera</span>
            <dl>
              <dt>Primary</dt>
              <dd>{phone.camera.primary}</dd>
              <dt>Features</dt>
              <dd>{phone.camera.features.join(', ')}</dd>
            </dl>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-6 ">
            <span>Additional Features</span>
            <dd>{phone.additionalFeatures}</dd>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (store: RootState) => {
  return {
    shoppingCartItems: store.shoppingCartState.shoppingCartItems
  };
};

export default connect(mapStateToProps)(PhoneDetail);
