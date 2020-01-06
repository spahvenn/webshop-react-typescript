import { combineReducers } from 'redux';

import shoppingCartReducer from './shopping-cart-reducer';

// Root reducer
const reducers = combineReducers({
  shoppingCartState: shoppingCartReducer
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
