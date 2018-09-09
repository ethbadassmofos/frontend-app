import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import AddressView from './AddressView'

const GET_ETHEREUM_ADDRESS = gql`
  query getEthereumAddress($address: String!) {
    ethereumAddress(address: $address) {
      nodeHistory {
        node {
          nameHash
        }
        actor {
          address
        }
        block
        tx
        action
      }
      nodes {
        nameHash
        label
        name
        node
        subNodes {
          nameHash
        }
      }
    }
  }
`

const AddressViewContainer = ({ query }) => (
  <Query query={GET_ETHEREUM_ADDRESS} variables={{ address: query }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      return (
        <Fragment>
          <AddressView data={data} address={query}/>
        </Fragment>
      )
    }}
  </Query>
)

export default AddressViewContainer
