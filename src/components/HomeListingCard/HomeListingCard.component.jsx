import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './HomeListingCard.styles'

function HomeListingCard({ classes, listing }) {
  const {
    imageURL,
    homeName,
    startingPrice,
    baths,
    beds,
    isMultiSection,
    sqft,
  } = listing

  const sectionType = isMultiSection ? 'Multi-Section' : 'Single-Section'

  function formatNum(num) {
    const str = num.toString()
    const numArr = str.split('')
    numArr.splice(str.length - 3, 0, ',')
    return numArr.join('')
  }

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={imageURL} title="house" />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {homeName}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Starting in the ${formatNum(startingPrice)}s
        </Typography>
        <Typography variant="body1" component="p">
          {`${formatNum(
            sqft
          )} sq. ft ${beds} beds ${baths} baths ${sectionType}`}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(HomeListingCard)
