import React, { useState, useEffect } from 'react'
import { Typography, Grid, Box, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import AppHeader from './components/AppHeader/AppHeader.component'
import HomeListingCard from './components/HomeListingCard/HomeListingCard.component'
import SortMenu from './components/SortMenu/SortMenu.component'
import styles from './App.styles'
import fetchListings from './api'

function App({ classes }) {
  const [listings, setListings] = useState(null)
  const [sortDescending, setSortDescending] = useState(true)
  const [endIndex, setEndIndex] = useState(9)

  useEffect(() => {
    fetchListings().then((res) => {
      setListings(res)
    })
  }, [])

  if (listings) {
    const displayedListings = listings
      .sort((a, b) => {
        if (sortDescending) {
          return b.startingPrice - a.startingPrice
        }
        return a.startingPrice - b.startingPrice
      })
      .slice(0, endIndex)

    function handleSortBy() {
      setSortDescending(!sortDescending)
    }

    function loadMore() {
      const diff = listings.length - displayedListings.length
      if (diff >= 3) {
        setEndIndex(endIndex + 3)
      } else {
        setEndIndex(endIndex + diff)
      }
    }

    return (
      <div>
        <AppHeader />
        <div className={classes.pageContainer}>
          <div className={classes.pageHeader}>
            <Typography variant="h5" className={classes.listingCount}>
              {listings.length} homes available
            </Typography>
            <SortMenu
              sortDescending={sortDescending}
              handleSortBy={handleSortBy}
            />
          </div>
          <Grid container className={classes.gridContainer} spacing={4}>
            {displayedListings.map((listing, index) => (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
                <HomeListingCard listing={listing} />
              </Grid>
            ))}
          </Grid>
          <Box
            display={endIndex === listings.length ? 'none' : 'block'}
            style={{ textAlign: 'center' }}
          >
            <Button
              variant="contained"
              color="primary"
              className={classes.loadBtn}
              onClick={loadMore}
            >
              <Typography variant="h5">Load More</Typography>
            </Button>
          </Box>
        </div>
      </div>
    )
  } else {
    return <div>LOADING...</div>
  }
}

export default withStyles(styles)(App)
