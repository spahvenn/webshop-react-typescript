import React, { useEffect, useState } from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from './redux/reducers/index';
import App from './App';

const store = compose(autoRehydrate())(createStore)(reducers);

export const AppProvider = () => {
  const [rehydrated, setRehydrated] = useState(false);

  useEffect(() => {
    persistStore(store, {}, () => {
      setRehydrated(true);
    });
  }, []);

  if (!rehydrated) {
    return <div></div>;
  }

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
