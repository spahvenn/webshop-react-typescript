import React from 'react';
import { connect } from 'react-redux';
import { addItemToShoppingCart } from '../../../redux/action-types';

interface OwnProps {
  addItemToShoppingCart: (id: string) => void;
  phoneId: string;
}

const ShoppingCartAddButton: React.FC<OwnProps> = p => {
  return (
    <button
      onClick={() => p.addItemToShoppingCart(p.phoneId)}
      className="add-to-cart-btn btn btn-primary"
    >
      Add to cart
    </button>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItemToShoppingCart: (id: string) => dispatch(addItemToShoppingCart(id))
  };
};

export default connect(null, mapDispatchToProps)(ShoppingCartAddButton);
