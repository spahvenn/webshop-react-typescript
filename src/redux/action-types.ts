export const ADD_ITEM_TO_SHOPPING_CART = 'ADD_ITEM_TO_SHOPPING_CART';
export const REMOVE_ITEM_FROM_SHOPPING_CART = 'REMOVE_ITEM_FROM_SHOPPING_CART';

export type addItemToShoppingCart = ReturnType<typeof addItemToShoppingCart>;
export type removeItemFromShoppingCart = ReturnType<
  typeof removeItemFromShoppingCart
>;

export function addItemToShoppingCart(itemId: string) {
  return {
    type: ADD_ITEM_TO_SHOPPING_CART,
    itemId: itemId
  };
}
export function removeItemFromShoppingCart(itemId: string) {
  return {
    type: REMOVE_ITEM_FROM_SHOPPING_CART,
    itemId: itemId
  };
}
