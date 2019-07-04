import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app.js';
import createStore from './redux/create-store.js';

const store = createStore();

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
