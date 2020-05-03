import React from 'react';
import { Item } from '../../types/types';

export const PhoneSpecs: React.FC<{ phone: Item }> = p => {
  const phone = p.phone;
  return (
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
  );
};
