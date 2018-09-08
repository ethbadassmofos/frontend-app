import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import Logo from '../Logo'

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
        <Logo />
        <Input name="searchfield" />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
    </Fragment>
  )
}

const Input = styled('input')`
  width: 100%;

  flex-direction: column;
  flex: 1 1 0;
  padding-left: 35px;
  // width: calc(100% - 243px);
  width: calc(100% - 162px);
  border: none;
  font-size: 28px;
  font-family: Overpass;
  font-weight: 100;

  &:focus {
    outline: 0;
  }

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #ccd4da;
  }
  ::after {
    content: '.eth';
    position: absolute;
    font-size: 15px;
    right: 0;
    padding: 0px 5px 0 10px;
    font-weight: bold;
    margin-top: 15px;
  }
`

const styledSearchbar = styled(Searchbar)`
  display: flex;
  position: relative;
  z-index: 1000;
  background: white;
  height: 78px;
`

export default styledSearchbar
