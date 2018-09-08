import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'
import styled from 'styled-components'

const Searchbar = ({ onSearch, className, ...rest }) => {
  return (
    <Fragment>
      <form
        className={className}
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault()
          onSearch(e.target.searchfield.value)
        }}
      >
        <TextField className="text-field" name="searchfield" />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
    </Fragment>
  )
}

const styledSearchbar = styled(Searchbar)`
  display: flex;
  position: relative;
  z-index: 1000;

  .text-field {
    flex-direction: column;
    flex: 1 1 0;
    margin-right: 5px;

    ::after {
      content: '.eth';
      position: absolute;
      font-size: 15px;
      right: 0;
      padding: 0px 5px 0 10px;
      font-weight: bold;
      margin-top: 15px;
    }
  }
`

export default styledSearchbar
