import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'
import { ThemeProvider } from 'styled-components'
import './index.html'

const browserHistory = qhistory(createBrowserHistory(), stringify, parse)

const component = (
   <Router history={browserHistory}>
      <h1>Hello World</h1>
   </Router>
)

cons = document.getElementById('root')

render(component, target)
