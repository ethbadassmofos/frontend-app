import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

const Searchbar = (props) => {
  const onSearch = props.onSearch;
  return (
    <Fragment>
      <form onSubmit={(e) => {e.preventDefault(); onSearch(e.target.searchfield.value); }}>
        <TextField name="searchfield" />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
    </Fragment>
  )
}

export default (Searchbar);