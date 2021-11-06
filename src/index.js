import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import { Provider } from 'react-router-dom';
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
