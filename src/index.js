import 'babel/polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import DevTools from './containers/DevTools/DevTools';
import component from './routes';

const dest = document.getElementById('content');

render(
  (<Provider store={store}>
    <div>
      {component}
      {!window.devToolsExtension && <DevTools/>}
    </div>
  </Provider>),
  dest
);
