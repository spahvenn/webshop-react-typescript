import { keyMirror } from '../utils/key-mirror';

export const ActionTypes = keyMirror({
  ADD_ITEM_TO_SHOPPING_CART: null,
  REMOVE_ITEM_FROM_SHOPPING_CART: null
});

export type addItemToShoppingCart = ReturnType<typeof addItemToShoppingCart>;
export type removeItemFromShoppingCart = ReturnType<
  typeof removeItemFromShoppingCart
>;

export const addItemToShoppingCart = (itemId: string) => ({
  type: ActionTypes.ADD_ITEM_TO_SHOPPING_CART,
  itemId: itemId
});

export const removeItemFromShoppingCart = (itemId: string) => ({
  type: ActionTypes.REMOVE_ITEM_FROM_SHOPPING_CART,
  itemId: itemId
});
