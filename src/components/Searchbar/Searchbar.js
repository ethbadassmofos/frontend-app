import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import styled from 'styled-components'

const Searchbar = ({onSearch, className, ...rest}) => {
  return (
    <Fragment>
      <form className={className} onSubmit={(e) => {e.preventDefault(); onSearch(e.target.searchfield.value); }}>
        <TextField name="searchfield" />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
    </Fragment>
  )
}

const styledSearchbar = styled(Searchbar)`

`

export default styledSearchbar
