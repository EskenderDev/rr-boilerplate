import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './store';
import Root from './containers/root';
import './assets/styles/main.css';

export const App = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>
);

if (!module.hot) {
  render(
    <App
      store={store}
      history={history}
    />,
    document.getElementById('root'),
  );
}
