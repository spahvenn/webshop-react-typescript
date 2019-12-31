import * as types from '../action-types';
import _ from 'underscore';
import { ShoppingCartItem } from "../../types/types";

const initialState = {
  shoppingCartItems: Array<ShoppingCartItem>(),
};

const shoppingCartReducer = function(state = initialState, action: any) {
  switch (action.type) {
    case types.ADD_ITEM_TO_SHOPPING_CART:
      let newShoppingCartItems = state.shoppingCartItems.slice() as any;
      let itemData: any;
      if (newShoppingCartItems) {
        itemData = _.find(newShoppingCartItems, (item: any) => {
          return item.phoneId === action.itemId;
        });
      }

      // increase item amount or add item to shopping cart
      if (itemData) {
        itemData.amount += 1;
      } else {
        itemData = { phoneId: action.itemId, amount: 1 };
        newShoppingCartItems.push(itemData);
      }

      return {
        shoppingCartItems: newShoppingCartItems,
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
