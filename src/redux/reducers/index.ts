import { combineReducers } from 'redux';

import shoppingCartReducer from './shopping-cart-reducer';

// Root reducer
var reducers = combineReducers({
  shoppingCartState: shoppingCartReducer
});

export default reducers;
