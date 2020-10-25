import { ShoppingCartItem } from '../../types/types';
import {
  ActionTypes,
  addItemToShoppingCart,
  removeItemFromShoppingCart
} from '../actions';
import { createReducer } from '../utils';

interface ShoppingCartState {
  shoppingCartItems: ShoppingCartItem[];
}

const initialState: ShoppingCartState = {
  shoppingCartItems: []
};

// TODO: ei mene tänne
const shoppingCartReducer = createReducer(initialState, {
  [ActionTypes.ADD_ITEM_TO_SHOPPING_CART]: (
    state: ShoppingCartState,
    action: addItemToShoppingCart
  ) => addShoppingCartItem(state, action),
  [ActionTypes.REMOVE_ITEM_FROM_SHOPPING_CART]: (
    state: ShoppingCartState,
    action: removeItemFromShoppingCart
  ) => removeShoppingCartItem(state, action)
});

const addShoppingCartItem = (
  state: ShoppingCartState,
  action: addItemToShoppingCart
) => {
  let newShoppingCartItems = [...state.shoppingCartItems];
  let shoppingCartItem: ShoppingCartItem;
  shoppingCartItem = newShoppingCartItems.find(
    item => item.phoneId === action.itemId
  );
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
};

const removeShoppingCartItem = (
  state: ShoppingCartState,
  action: removeItemFromShoppingCart
) => {
  let newShoppingCartItems = [...state.shoppingCartItems];
  const shoppingCartItem = newShoppingCartItems.find(
    item => item.phoneId === action.itemId
  );

  // decrease item amount if it exists
  if (shoppingCartItem) {
    shoppingCartItem.amount -= 1;
  } else {
    return state;
  }

  if (shoppingCartItem.amount === 0) {
    newShoppingCartItems = newShoppingCartItems.filter(
      value => value.phoneId !== action.itemId
    );
  }

  return {
    shoppingCartItems: newShoppingCartItems
  };
};

export default shoppingCartReducer;
