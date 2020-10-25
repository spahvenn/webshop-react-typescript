import React from 'react';

interface OwnProps {
  addItemToShoppingCart?: (id: string) => void;
  removeItemFromShoppingCart?: (id: string) => void;
  phoneId: string;
  btnType: string;
}

const ShoppingCartAmountBtn: React.FC<OwnProps> = p => {
  const className =
    p.btnType === 'add' ? 'add-to-cart-btn' : 'remove-from-cart-btn';
  const onClick = (id: string) => {
    p.btnType === 'add'
      ? p.addItemToShoppingCart(id)
      : p.removeItemFromShoppingCart(id);
  };

  const btnText = p.btnType === 'add' ? '+' : '-';

  return (
    <button
      onClick={() => onClick(p.phoneId)}
      className={`${className} btn btn-primary`}
    >
      {btnText}
    </button>
  );
};

export default ShoppingCartAmountBtn;
