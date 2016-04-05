import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Route Components
import App from '../../ui/layout/app.jsx'
import Prime from '../../ui/pages/prime.jsx'
import Contact from '../../ui/pages/contact.jsx'

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Prime}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
)
