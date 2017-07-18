import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { App } from './app';
import { store, history } from './store';

const render = () => {
  module.hot.accept('./reducers/index', () => {
    store.replaceReducer(require('./reducers/index'));
  });

  ReactDOM.render(
    <AppContainer>
      <App
        store={store}
        history={history}
      />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render()

module.hot.accept('./app', render);
