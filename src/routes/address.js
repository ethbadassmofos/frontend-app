import React from 'react'
import ViewContainer from '../components/ViewContainer'
import styled from 'styled-components'
import SearchResult from '../components/SearchResult'

const Address = ({ match: { params }, style }) => (
  <Fill
    className="fill"
    style={{
      ...style,
      background: 'green'
    }}
  >
    <ViewContainer>
      <SearchResult query={this.state.searchQuery} />
    </ViewContainer>
  </Fill>
)

const Fill = styled('div')`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Address
