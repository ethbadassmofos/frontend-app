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

const AddressViewContainer = ({ searchQuery }) => (
  <Query
    query={GET_ETHEREUM_ADDRESS}
    variables={{ address: '0xdbfeeef46e9cc06136c3da02a9799bccc125bb39' }}
  >
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      return (
        <Fragment>
          <AddressView data={data} />
        </Fragment>
      )
    }}
  </Query>
)

export default AddressViewContainer
