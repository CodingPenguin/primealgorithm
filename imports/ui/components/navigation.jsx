import React from 'react'
import { render } from 'react-dom'

import ActionHome from 'material-ui/lib/svg-icons/action/home'
import Colors from 'material-ui/lib/styles/colors'
import ContentMail from 'material-ui/lib/svg-icons/content/mail'
import Divider from 'material-ui/lib/divider'
import FontIcon from 'material-ui/lib/font-icon'
import IconButton from 'material-ui/lib/icon-button'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title'

const styles = {
  navigation: {
    backgroundColor: "#EF5350"
  },
  title: {
    color: "#fff"
  },
  menuItemDefault: {
    color: "rgb(147, 146, 146)",
    textAlign: "center"
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

            <MenuItem primaryText="Home"
                      leftIcon={<ActionHome style={styles.svgDefault}/>}
                      href="/"
                      style={styles.menuItemDefault}/>

            <MenuItem primaryText="Contact"
                      leftIcon={<ContentMail style={styles.svgDefault}/>}
                      href="/contact"
                      style={styles.menuItemDefault}/>

            <Divider/>

            <MenuItem primaryText="Github"
                      href="http://bit.ly/1SvTb16"
                      target="_blank"
                      style={styles.menuItemDefault}/>

          </IconMenu>
       </ToolbarGroup>
     </Toolbar>
    )
  }
}
