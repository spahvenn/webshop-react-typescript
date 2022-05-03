import React from 'react';
import {
  addItemToShoppingCart,
  removeItemFromShoppingCart
} from '../../redux/actions';
import { connect } from 'react-redux';

interface OwnProps {
  addItemToShoppingCart?: (id: string) => void;
  removeItemFromShoppingCart?: (id: string) => void;
  itemId: string;
  btnType: string;
}

export const ShoppingCartAmountButton: React.FC<OwnProps> = p => {
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
      onClick={() => onClick(p.itemId)}
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

const ShoppingCartAmountButtonContainer = connect(
  null,
  mapDispatchToProps
)(ShoppingCartAmountButton);

export default ShoppingCartAmountButtonContainer;
