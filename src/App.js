import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
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
        {listings.map((listing, index) => (
          <HomeListingCard listing={listing} key={index} />
        ))}
      </div>
    </div>
  )
}

export default withStyles(styles)(App)
