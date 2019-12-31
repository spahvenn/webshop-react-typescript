export const ADD_ITEM_TO_SHOPPING_CART = 'ADD_ITEM_TO_SHOPPING_CART';

export function addItemToShoppingCart(itemId) {
  return {
    type: ADD_ITEM_TO_SHOPPING_CART,
    itemId: itemId
  };
}
