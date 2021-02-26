import React, { useState } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import AppHeader from './components/AppHeader/AppHeader.component'
import HomeListingCard from './components/HomeListingCard/HomeListingCard.component'
import homeListings from './homeListings.json'
import styles from './App.styles'

function App({ classes }) {
  const [listings, setListings] = useState(homeListings)
  console.log({ listings })

  return (
    <div>
      <AppHeader />
      <div className={classes.pageContainer}>
        <Typography variant="h5" style={{ marginBottom: 40 }}>
          {listings.length} homes available
        </Typography>
        <Grid container className={classes.gridContainer} spacing={4}>
          {listings.map((listing, index) => (
            <Grid
              item
              justify="center"
              xs={12}
              sm={6}
              lg={4}
              xl={3}
              key={index}
            >
              <HomeListingCard listing={listing} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default withStyles(styles)(App)
