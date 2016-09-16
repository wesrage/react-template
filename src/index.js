import './index.html';
import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './store';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const store = configureStore();

const component = (
   <Provider store={store}>
      <Router routes={routes} history={browserHistory}/>
   </Provider>
);

const target = document.getElementById('root');

render(component, target);
