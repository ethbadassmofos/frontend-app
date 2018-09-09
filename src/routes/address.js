import React from 'react'
import styled from 'styled-components'
import ViewContainer from '../components/ViewContainer'
import Consumer from '../GlobalState'
import AddressView from '../components/AddressView/'

const Address = ({ style }) => (
  <Fill
    className="fill"
    style={{
      ...style
    }}
  >
    <ViewContainer>
      <Consumer>
        {({ searchQuery }) => <AddressView query={searchQuery} />}
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
