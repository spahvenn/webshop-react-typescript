import _ from 'underscore';

var shoppingCartUtils = {

  calculateTotalPrice: function(shoppingCartItems) {
    let totalPrice = 0;
    _.each(shoppingCartItems, (item) => {
      totalPrice += item.amount * item.price;
    });
    return totalPrice;
  }

}

export default shoppingCartUtils;