/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import './index.html';
import { configureStore } from './store';
import routes from './routes';

const store = configureStore();

const component = (
   <Provider store={store}>
      <Router routes={routes} history={browserHistory}/>
   </Provider>
);

const target = document.getElementById('root');

render(component, target);
