export interface ShoppingCartItem {
  phoneId: string;
  amount: number;
}

export interface ListItem {
  age: number;
  carrier: string;
  id: string;
  imageUrl: string;
  name: string;
  snippet: string;
}

export interface Item {
  price: number;
  additionalFeatures: string;
  android: {
    os: string;
    ui: string;
  };
  availability: string;
  battery: {
    standbyTime: string;
    talkTime: string;
    type: string;
  };
  camera: {
    features: string[];
    primary: string;
  };
  connectivity: {
    bluetooth: string;
    cell: string;
    gps: boolean;
    infrared: boolean;
    wifi: string;
  };
  description: string;
  display: {
    screenResolution: string;
    screenSize: string;
    touchScreen: boolean;
  };
  hardware: {
    accelerometer: boolean;
    audioJack: string;
    cpu: string;
    fmRadio: boolean;
    physicalKeyboard: boolean;
    usb: string;
  };
  id: string;
  images: string[];
  name: string;
  sizeAndWeight: {
    dimensions: string[];
    weight: string;
  };
  storage: {
    flash: string;
    ram: string;
  };
}

export type AmountItem = Item & { amount: number };
