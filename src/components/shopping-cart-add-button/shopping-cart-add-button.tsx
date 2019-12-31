import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartAddButtonComponent from "./shopping-cart-add-button-component";
import { addItemToShoppingCart } from "../../redux/action-types";

interface OwnProps {
  addItemToShoppingCart: (id: string) => void;
  phoneId: string;
}

const ShoppingCartAddButton: React.FC<OwnProps> = (p) => {
    return (
      <ShoppingCartAddButtonComponent
        addItemToShoppingCart={() => p.addItemToShoppingCart(p.phoneId)}
      />
    );
  }

// Maps actions to props
const mapDispatchToProps = (dispatch: any) => {
  return {
    addItemToShoppingCart: (item: any) => dispatch(addItemToShoppingCart(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ShoppingCartAddButton);
