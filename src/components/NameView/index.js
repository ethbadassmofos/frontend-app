import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import NameView from './NameView'

const GET_ENS_NAME_QUERY = gql`
  query($name: String!) {
    ensNode(name: $name) {
      # resolver @client
      addr @client
      # content @client
      node {
        name
        nameHash
      }
      owner {
        address
      }
      resolverHistory {
        address
        block
        txId
      }
      ownerHistory {
        actor {
          address
        }
        node {
          name
          nameHash
          label
        }
        tx
        block
        action
      }
    }
  }
`

const NameViewContainer = ({ query: name }) => (
  <Query query={GET_ENS_NAME_QUERY} variables={{ name }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      return (
        <Fragment>
          <NameView data={data} />
        </Fragment>
      )
    }}
  </Query>
)

export default NameViewContainer
