import 'babel/polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import component from './routes';

const dest = document.getElementById('content');

render(
  (<Provider store={store}>
    <div>
      {component}
    </div>
  </Provider>),
  dest
);
