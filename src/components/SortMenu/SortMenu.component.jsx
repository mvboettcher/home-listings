import React from 'react'
import { Button, Typography } from '@material-ui/core'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { withStyles } from '@material-ui/core'
import styles from './SortMenu.styles'

function SortMenu({ classes, sortDescending, handleSortBy }) {
  return (
    <div className={classes.container}>
      <Typography variant="body2" color="textSecondary">
        SORT BY
      </Typography>
      <Button
        variant="outlined"
        className={classes.sortByBtn}
        endIcon={
          sortDescending ? (
            <ArrowDropDownIcon color="primary" />
          ) : (
            <ArrowDropUpIcon color="primary" />
          )
        }
        onClick={handleSortBy}
      >
        Price: {sortDescending ? 'High to low' : 'Low to high'}
      </Button>
    </div>
  )
}

export default withStyles(styles)(SortMenu)
