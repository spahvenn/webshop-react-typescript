import React from 'react';
import { connect } from 'react-redux';
import {
  addItemToShoppingCart,
  removeItemFromShoppingCart
} from '../../redux/actions';

interface OwnProps {
  addItemToShoppingCart: (id: string) => void;
  removeItemFromShoppingCart: (id: string) => void;
  phoneId: string;
  btnType: string;
}

export const ShoppingCartAmountBtn: React.FC<OwnProps> = p => {
  const className =
    p.btnType === 'add' ? 'add-to-cart-btn' : 'remove-from-cart-btn';
  const onClick =
    p.btnType === 'add'
      ? p.addItemToShoppingCart
      : p.removeItemFromShoppingCart;
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

const mapDispatchToProps = (dispatch: any) => ({
  addItemToShoppingCart: (id: string) => dispatch(addItemToShoppingCart(id)),
  removeItemFromShoppingCart: (id: string) =>
    dispatch(removeItemFromShoppingCart(id))
});

export default connect(null, mapDispatchToProps)(ShoppingCartAmountBtn);
