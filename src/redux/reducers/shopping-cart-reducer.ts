import * as types from '../action-types';
import _ from 'underscore';
import { ShoppingCartItem } from '../../types/types';
import { ShoppingCartActionTypes } from '../action-types';

interface ShoppingCartState {
  shoppingCartItems: ShoppingCartItem[];
}

const initialState: ShoppingCartState = {
  shoppingCartItems: []
};

const shoppingCartReducer = (
  state = initialState,
  action: ShoppingCartActionTypes
) => {
  switch (action.type) {
    case types.ADD_ITEM_TO_SHOPPING_CART:
      let newShoppingCartItems = state.shoppingCartItems.slice();
      let shoppingCartItem: ShoppingCartItem;
      if (newShoppingCartItems) {
        shoppingCartItem = _.find(newShoppingCartItems, item => {
          return item.phoneId === action.itemId;
        });
      }
      // increase item amount or add item to shopping cart
      if (shoppingCartItem) {
        shoppingCartItem.amount += 1;
      } else {
        shoppingCartItem = { phoneId: action.itemId, amount: 1 };
        newShoppingCartItems.push(shoppingCartItem);
      }
      return {
        shoppingCartItems: newShoppingCartItems
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
