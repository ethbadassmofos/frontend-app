import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import NameView from '../NameView'
const ETH_ADDRESS_PATTERN = /^0x[a-fA-F0-9]{40}$/
const GET_ENS_NAME_QUERY = gql`
  query {
    ensNode(name: "jefflau.eth") {
      owner {
        address
      }
    }
  }
`

const GET_OWNERSHIPS_QUERY = gql`
  query ensName($name: String) {
    ensName(name: $name) {
      name
      ownerHistory {
        address
      }
      resolverHistory {
        address
      }
    }
  }
`
const getSearchVariables = query =>
  query.match(ETH_ADDRESS_PATTERN) ? { owner: query } : { name: query }

const getSearchQuery = query =>
  query.match(ETH_ADDRESS_PATTERN) ? GET_OWNERSHIPS_QUERY : GET_ENS_NAME_QUERY

class SearchResult extends Component {
  render() {
    const { props } = this
    const { query } = props
    return props.query && props.query.length > 0 ? (
      <Query
        query={getSearchQuery(query)}
        variables={getSearchVariables(query)}
      >
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
    ) : (
      <div>search plz</div>
    )
  }
}

export default SearchResult
