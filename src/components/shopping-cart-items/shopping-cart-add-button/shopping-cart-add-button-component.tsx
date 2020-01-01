import React from 'react';

const ShoppingCartAddButtonComponent = (p: any) => {
  return (
    <button
      onClick={p.addItemToShoppingCart}
      className="add-to-cart-btn btn btn-primary"
    >
      Add to cart
    </button>
  );
};

export default ShoppingCartAddButtonComponent;
