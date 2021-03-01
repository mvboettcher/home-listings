import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './AppHeader.styles'
import claytonLogo from '../../assets/clayton-logo.jpg'

function AppHeader({ classes }) {
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <img src={claytonLogo} alt="clayton homes" height="34" />
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(AppHeader)
