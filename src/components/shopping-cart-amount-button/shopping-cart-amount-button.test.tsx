import { shallow } from 'enzyme';
import { ShoppingCartAmountButton } from './shopping-cart-amount-button';
import React from 'react';

describe('<ShoppingCartAmountBtn />', () => {
  it('renders with + as text', () => {
    const wrapper = shallow(
      <ShoppingCartAmountButton
        addItemToShoppingCart={jest.fn()}
        btnType="add"
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
      <ShoppingCartAmountButton
        addItemToShoppingCart={jest.fn()}
        btnType="remove"
        itemId={'1'}
        removeItemFromShoppingCart={jest.fn()}
      />
    );
    expect(wrapper.text()).toEqual('-');
  });
});
