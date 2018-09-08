import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import Social from '../Social/Social'
import Searchbar from '../Searchbar'
import SearchResult from '../SearchResult'
import styles from './Layout.styles'

class Layout extends Component {

  constructor(props) {
      super(props);
      this.state = {
        searchQuery: null
      };
  }
  render() {
    console.log('props', this.props);
    console.log('classes', this.classes)
    const { name, classes } = this.props;
    return (
      <Grid className={classes.root}>
      <span className={classes.shape1} />
      <span className={classes.shape2} />
      <span className={classes.shape3} />
        <Grid container direction="column" className={classes.section}>
          <Searchbar onSearch={(searchQuery) => {console.log('SEEEEARCH', searchQuery); this.setState({ searchQuery })}} />
          <SearchResult query={this.state.searchQuery}/>
        </Grid>
        <span className={classes.ornament} />
        <Social className={classes.social} />
      </Grid>
    )
  }
}

export default withStyles(styles)(Layout)
