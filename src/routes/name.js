import React from 'react'
import ViewContainer from '../components/ViewContainer'
import SearchResult from '../components/SearchResult'
import styled from 'styled-components'
import Consumer from '../GlobalState'

const Name = ({ match: { params }, style }) => (
  <Fill
    className="fill"
    style={{
      ...style,
      background: 'red'
    }}
  >
    <ViewContainer>
      <Consumer>
        {({ searchQuery }) => <SearchResult query={searchQuery} />}
      </Consumer>
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

export default Name
