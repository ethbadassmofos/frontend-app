import React from 'react'
import styled from 'styled-components'
import ViewContainer from '../components/ViewContainer'
import SearchResult from '../components/SearchResult'
import Consumer from '../GlobalState'

const Address = ({ match: { params = {} }, style }) => (
  <Fill
    className="fill"
    style={{
      ...style
    }}
  >
    <ViewContainer>
      <Consumer>
        {() => <SearchResult query={params.address} />}
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

export default Address
