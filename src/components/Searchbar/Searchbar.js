import React, { Fragment } from 'react'
import styled from 'styled-components'
import Logo from '../Logo'

const SearchButton = styled('button')`
  font-family: Overpass;
  padding: 0 30px;
  border-radius: 0;
  color: white;
  font-size: 22px;
  background: #5284ff;
`

const Searchbar = ({ onSearch, className }) => (
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
      <SearchButton type="submit">Search</SearchButton>
    </form>
  </Fragment>
)

const Input = styled('input')`
  width: 100%;

  flex-direction: column;
  flex: 1 1 0;
  padding-left: 35px;
  // width: calc(100% - 243px);
  width: calc(100% - 162px);
  border: none;
  border-left: 2px solid #f0f6fa;
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
