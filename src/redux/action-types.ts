export const ADD_ITEM_TO_SHOPPING_CART = 'ADD_ITEM_TO_SHOPPING_CART';

type AddItemToShoppingCart = ReturnType<typeof addItemToShoppingCart>;
export function addItemToShoppingCart(itemId: string) {
  return {
    type: ADD_ITEM_TO_SHOPPING_CART,
    itemId: itemId
  };
}

export type ShoppingCartActionTypes = AddItemToShoppingCart;
