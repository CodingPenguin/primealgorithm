import React from 'react'
import { render } from 'react-dom'

import IconMenu from 'material-ui/lib/menus/icon-menu'
import IconButton from 'material-ui/lib/icon-button'
import FontIcon from 'material-ui/lib/font-icon'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ActionHome from 'material-ui/lib/svg-icons/action/home'
import ContentMail from 'material-ui/lib/svg-icons/content/mail'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title'

export default class Navigation extends React.Component {
  render() {
    return (
      <Toolbar>
       <ToolbarGroup float="left">
         <ToolbarTitle text="Prime Calculate"/>
         <FontIcon className="muidocs-icon-custom-sort"/>
       </ToolbarGroup>
       <ToolbarGroup float="right">
          <IconMenu iconButtonElement={<IconButton touch={true}><MoreVertIcon/></IconButton>}>
            <MenuItem primaryText="Home" leftIcon={<ActionHome/>} href="/"/>
            <MenuItem primaryText="Contact" leftIcon={<ContentMail/>} href="/contact"/>
          </IconMenu>
       </ToolbarGroup>
     </Toolbar>
    )
  }
}
