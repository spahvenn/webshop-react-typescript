import { AmountItem } from '../types/types';

const shoppingCartUtils = {
  calculateTotalPrice: (shoppingCartItems: AmountItem[]) => {
    let totalPrice = 0;
    shoppingCartItems.forEach(item => {
      totalPrice += item.amount * item.price;
    });
    return totalPrice;
  }
};

export default shoppingCartUtils;
