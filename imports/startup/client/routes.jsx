import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

// Route Components
import App from '../../ui/app.jsx'
import Contact from '../../ui/pages/contact.jsx'

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
)
