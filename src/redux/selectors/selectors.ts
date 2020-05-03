import { createSelector } from 'reselect';
import { ShoppingCartItem } from '../../types/types';

const shoppingCartItemsSelector = (state: any) =>
  state.shoppingCartState.shoppingCartItems;
export const shoppingCartItemAmountSelector = createSelector(
  shoppingCartItemsSelector,
  (items: ShoppingCartItem[]) => {
    let totalAmount = 0;
    items.forEach(item => {
      totalAmount += item.amount;
    });
    return totalAmount;
  }
);
