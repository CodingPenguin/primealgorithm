import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

// Require for Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin'

import { renderRoutes } from '../imports/startup/client/routes.jsx'

Meteor.startup(() => {
  injectTapEventPlugin()
  render(renderRoutes(), document.getElementById('app'))
})
