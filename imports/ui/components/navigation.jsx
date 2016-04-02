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
import Colors from 'material-ui/lib/styles/colors'

const styles = {
  navigation: {
    backgroundColor: "#EF5350"
  },
  title: {
    color: "#fff"
  },
  menuItemDefault: {
    color: "rgb(147, 146, 146)"
  },
  svgDefault: {
    fill: "rgb(147, 146, 146)"
  }
}

export default class Navigation extends React.Component {
  render() {
    return (
      <Toolbar style={styles.navigation}>
       <ToolbarGroup float="left">
         <ToolbarTitle text="Prime Calculate" style={styles.title}/>
         <FontIcon className="muidocs-icon-custom-sort"/>
       </ToolbarGroup>
       <ToolbarGroup float="right">
          <IconMenu iconButtonElement={<IconButton iconStyle={{fill: "white"}} touch={true}><MoreVertIcon/></IconButton>}>
            <MenuItem style={{padding: 0}} primaryText="Home" leftIcon={<ActionHome style={styles.svgDefault} hoverColor="#00000"/>} href="/" style={styles.menuItemDefault}/>
            <MenuItem primaryText="Contact" leftIcon={<ContentMail style={styles.svgDefault}  hoverColor="#00000"/>} href="/contact" style={styles.menuItemDefault}/>
          </IconMenu>
       </ToolbarGroup>
     </Toolbar>
    )
  }
}
