import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import HomeView from './HomeView'

const GET_OWNER_STATS_QUERY = gql`
  query {
    ownerStats {
      owner {
        address
      }
      nodesOwned
    }
  }
`

const HomeViewContainer = () => (
  <Query query={GET_OWNER_STATS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      return (
        <Fragment>
          <HomeView data={data} />
        </Fragment>
      )
    }}
  </Query>
)

export default HomeViewContainer
