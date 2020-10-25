import { AmountItem, Item, ShoppingCartItem } from '../types/types';
import Axios from 'axios';

const calculateTotalPrice = (shoppingCartItems: AmountItem[]) => {
  let totalPrice = 0;
  shoppingCartItems.forEach(item => {
    totalPrice += item.amount * item.price;
  });
  return totalPrice;
};

// Get items from BE
const getItems = async (shoppingCartItems: ShoppingCartItem[]) => {
  const promises: any[] = [];
  const itemIds = shoppingCartItems.map(
    shoppingCartItem => shoppingCartItem.phoneId
  );
  itemIds.forEach(itemId => {
    promises.push(
      Axios.get(process.env.PUBLIC_URL + '/phones-data/' + itemId + '.json')
    );
  });
  const responses = await Promise.all(promises);
  const amountItems = responses.map(response => {
    const item: Item = response.data;
    const shoppingCartItem = shoppingCartItems.find(
      shoppingCartItem => item.id === shoppingCartItem.phoneId
    );
    return { ...item, amount: shoppingCartItem.amount } as AmountItem;
  });
  return amountItems;
};

export { calculateTotalPrice, getItems };
