import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import Social from '../Social/Social'
import Searchbar from '../Searchbar'
import styles from './Layout.styles'

const Layout = ({ name, classes }) => (
  <Grid className={classes.root}>
    <span className={classes.shape1} />
    <span className={classes.shape2} />
    <span className={classes.shape3} />
    <Grid container direction="column" className={classes.section}>
      <Searchbar onSearch={(value) => {console.log('SEEEEARCH', value)}} />
    </Grid>
    <span className={classes.ornament} />
    <Social className={classes.social} />
  </Grid>
)

export default withStyles(styles)(Layout)
