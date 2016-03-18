require('./index.html');
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import reducers from './store/reducers';

const target = document.getElementById('root');

const store = createStore(reducers);

const history = syncHistoryWithStore(browserHistory, store);

const component = (
   <Provider store={store}>
      <Router routes={routes} history={history}/>
   </Provider>
);

render(component, target);
