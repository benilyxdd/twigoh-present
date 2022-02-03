import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import infoReducer from '../src/store/reducers/info';
import cartReducer from '../src/store/reducers/cart';
import '../styles/globals.css';

const rootReducer = combineReducers({
  info: infoReducer,
  cart: cartReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
