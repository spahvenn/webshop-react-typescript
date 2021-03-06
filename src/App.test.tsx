import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCartAmountBtn from './components/shopping-cart-items/shopping-cart-amount-btn';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

describe('<ShoppingCartAmountBtn />', () => {
  it('renders with + as text', () => {
    const wrapper = shallow(
      <ShoppingCartAmountBtn
        addItemToShoppingCart={jest.fn()}
        btnType={'add'}
        itemId={'1'}
        removeItemFromShoppingCart={jest.fn()}
      />
    );
    expect(wrapper.text()).toEqual('+');
  });
});

describe('<ShoppingCartAmountBtn />', () => {
  it('renders with - as text', () => {
    const wrapper = shallow(
      <ShoppingCartAmountBtn
        addItemToShoppingCart={jest.fn()}
        btnType={'remove'}
        itemId={'1'}
        removeItemFromShoppingCart={jest.fn()}
      />
    );
    expect(wrapper.text()).toEqual('-');
  });
});
