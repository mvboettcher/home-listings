import React, { useState, useEffect } from 'react'
import {
  Typography,
  Grid,
  Box,
  Button,
  CircularProgress,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import AppHeader from './components/AppHeader/AppHeader.component'
import HomeListingCard from './components/HomeListingCard/HomeListingCard.component'
import SortMenu from './components/SortMenu/SortMenu.component'
import FilterMenu from './components/FilterMenu/FilterMenu.componet'
import styles from './App.styles'
import fetchListings from './api'

function App({ classes }) {
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState([])
  const [filteredListings, setFilteredListings] = useState([])
  const [endIndex, setEndIndex] = useState(9)
  const [sortDescending, setSortDescending] = useState(true)
  const [beds, setBeds] = useState(1)
  const [baths, setBaths] = useState(1)

  // function getListings() {
  //   fetchListings()
  //     .then((data) => {
  //       const sortedListings = data.sort((a, b) => {
  //         if (sortDescending) {
  //           return b.startingPrice - a.startingPrice
  //         }
  //         return a.startingPrice - b.startingPrice
  //       })

  //       setListings(sortedListings)
  //     })
  //     .catch((err) => {
  //       console.log(
  //         'Unable to retreive home listings.  Make sure API is running'
  //       )
  //       setLoading(false)
  //     })
  // }

  // function updateFilteredListings() {
  //   const filteredListings = listings.filter(
  //     (listing) => listing.baths >= baths && listing.beds >= beds
  //   )

  //   setFilteredListings(filteredListings)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000)
  // }

  function handleSortBy() {
    setSortDescending(!sortDescending)
  }

  function loadMore() {
    const diff = listings.length - endIndex
    if (diff >= 3) {
      setEndIndex(endIndex + 3)
    } else {
      setEndIndex(endIndex + diff)
    }
  }

  useEffect(() => {
    fetchListings()
      .then((data) => {
        const sortedListings = data.sort((a, b) => {
          if (sortDescending) {
            return b.startingPrice - a.startingPrice
          }
          return a.startingPrice - b.startingPrice
        })

        setListings(sortedListings)
      })
      .catch((err) => {
        console.log(
          'Unable to retreive home listings.  Make sure API is running'
        )
        setLoading(false)
      })
  }, [sortDescending])

  useEffect(() => {
    const filteredListings = listings.filter(
      (listing) => listing.baths >= baths && listing.beds >= beds
    )

    setFilteredListings(filteredListings)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [listings, beds, baths])

  return (
    <>
      <AppHeader />
      {loading ? (
        <div className={classes.loadingContainer}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.listingsContainer}>
          <div className={classes.pageHeader}>
            <Typography variant="h5" className={classes.listingCount}>
              {filteredListings.length} homes available
            </Typography>
            <FilterMenu
              beds={beds}
              setBeds={setBeds}
              baths={baths}
              setBaths={setBaths}
            />
            <SortMenu
              sortDescending={sortDescending}
              handleSortBy={handleSortBy}
            />
          </div>
          <Grid container className={classes.gridContainer} spacing={4}>
            {filteredListings.slice(0, endIndex).map((listing, index) => (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
                <HomeListingCard listing={listing} />
              </Grid>
            ))}
          </Grid>
          <Box
            display={
              filteredListings.length === 0 ||
              endIndex >= filteredListings.length
                ? 'none'
                : 'block'
            }
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
      )}
    </>
  )
}

export default withStyles(styles)(App)
