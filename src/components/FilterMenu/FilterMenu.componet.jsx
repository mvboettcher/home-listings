import React, { useState } from 'react'
import {
  Button,
  ButtonGroup,
  Typography,
  Menu,
  IconButton,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel'
import styles from './FilterMenu.styles'

function FilterMenu({ classes, beds, baths, setBeds, setBaths }) {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const options = [1, 2, 3, 4, 5]

  return (
    <div className={classes.container}>
      <Typography variant="body2" color="textSecondary">
        FILTER BY
      </Typography>
      <Button
        variant="outlined"
        className={classes.filterMenuBtn}
        onClick={handleOpenMenu}
      >
        {`${beds}+ bd, ${baths}+ ba`}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            paddingBottom: 16,
          },
        }}
      >
        <div className={classes.closeBtn}>
          <IconButton aria-label="close" onClick={handleClose}>
            <CancelIcon />
          </IconButton>
        </div>
        <div className={classes.filterGroup}>
          <Typography
            variant="body2"
            color="primary"
            gutterBottom
            style={{ fontWeight: 'bold' }}
          >
            Bedrooms
          </Typography>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
            size="large"
            className={classes.btnGroup}
          >
            {options.map((option, index) => (
              <Button
                key={index}
                value={option}
                variant={beds === index + 1 ? 'contained' : 'outlined'}
                disableElevation
                onClick={() => setBeds(option)}
              >
                {option + '+'}
              </Button>
            ))}
          </ButtonGroup>
        </div>
        <div className={classes.filterGroup}>
          <Typography
            variant="body2"
            color="primary"
            gutterBottom
            style={{ fontWeight: 'bold' }}
          >
            Bathrooms
          </Typography>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
            size="large"
            className={classes.btnGroup}
          >
            {options.map((option, index) => (
              <Button
                key={index}
                value={option}
                variant={baths === index + 1 ? 'contained' : 'outlined'}
                disableElevation
                onClick={() => setBaths(option)}
              >
                {option + '+'}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </Menu>
    </div>
  )
}

export default withStyles(styles)(FilterMenu)
