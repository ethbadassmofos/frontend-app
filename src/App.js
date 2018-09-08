import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Layout from './components/Layout/Layout'

const GET_ENS_NAME = gql`
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

class App extends Component {
  render() {
    return (
      <Query query={GET_ENS_NAME} variables={{ name: 'jefflau.eth' }}>
        {({ loading, error, data }) => {
          if (loading) return ''
          if (error) return `Error! ${error.message}`

          return <div>{console.log(data)} hello</div>
        }}
      </Query>
    )
  }
}

export default App
