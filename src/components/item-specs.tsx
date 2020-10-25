import React from 'react';
import { Item } from '../types/types';

export const ItemSpecs: React.FC<{ item: Item }> = p => {
  const item = p.item;
  return (
    <div className="specs">
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-6 ">
          <span>Battery</span>
          <dl>
            <dt>Type</dt>
            <dd>{item.battery.type}</dd>
            <dt>Talk Time</dt>
            <dd>{item.battery.talkTime}</dd>
            <dt>Standby time (max)</dt>
            <dd>{item.battery.standbyTime}</dd>
          </dl>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          <span>Storage and Memory</span>
          <dl>
            <dt>RAM</dt>
            <dd>{item.storage.ram}</dd>
            <dt>Internal Storage</dt>
            <dd>{item.storage.flash}</dd>
          </dl>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          <span>Connectivity</span>
          <dl>
            <dt>Network Support</dt>
            <dd>{item.connectivity.cell}</dd>
            <dt>WiFi</dt>
            <dd>{item.connectivity.wifi}</dd>
            <dt>Bluetooth</dt>
            <dd>{item.connectivity.bluetooth}</dd>
            <dt>Infrared</dt>
            <dd>{item.connectivity.infrared}</dd>
            <dt>GPS</dt>
            <dd>{item.connectivity.gps}</dd>
          </dl>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          <span>Android</span>
          <dl>
            <dt>OS Version</dt>
            <dd>{item.android.os}</dd>
            <dt>UI</dt>
            <dd>{item.android.ui}</dd>
          </dl>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-6 ">
          <span>Size and Weight</span>
          <dl>
            <dt>Dimensions</dt>
            <dt>Weight</dt>
            <dd>{item.sizeAndWeight.weight}</dd>
          </dl>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          <span>Display</span>
          <dl>
            <dt>Screen size</dt>
            <dd>{item.display.screenSize}</dd>
            <dt>Screen resolution</dt>
            <dd>{item.display.screenResolution}</dd>
            <dt>Touch screen</dt>
            <dd>{item.display.touchScreen}</dd>
          </dl>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          <span>Hardware</span>
          <dl>
            <dt>CPU</dt>
            <dd>{item.hardware.cpu}</dd>
            <dt>USB</dt>
            <dd>{item.hardware.usb}</dd>
            <dt>Audio / headphone jack</dt>
            <dd>{item.hardware.audioJack}</dd>
            <dt>FM Radio</dt>
            <dd>{item.hardware.fmRadio}</dd>
            <dt>Accelerometer</dt>
            <dd>{item.hardware.accelerometer}</dd>
          </dl>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          <span>Camera</span>
          <dl>
            <dt>Primary</dt>
            <dd>{item.camera.primary}</dd>
            <dt>Features</dt>
            <dd>{item.camera.features.join(', ')}</dd>
          </dl>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-6 ">
          <span>Additional Features</span>
          <dd>{item.additionalFeatures}</dd>
        </div>
      </div>
    </div>
  );
};
