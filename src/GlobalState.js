import React, { createContext, Component } from 'react'
import { withRouter } from 'react-router'

const GlobalContext = createContext({})
const GlobalConsumer = GlobalContext.Consumer

const ETH_ADDRESS_PATTERN = /^0x[a-fA-F0-9]{40}$/

class Provider extends Component {
  onSearch = searchQuery => {
    if (searchQuery.match(ETH_ADDRESS_PATTERN)) {
      this.props.history.push(`/address/${searchQuery}`)
    } else {
      this.props.history.push(`/name/${searchQuery}.eth`)
    }
  }

  render () {
    return (
      <GlobalContext.Provider
        value={{
          onSearch: this.onSearch
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

const GlobalProviderWithRouter = withRouter(Provider)

export { GlobalProviderWithRouter as GlobalProvider }

export default GlobalConsumer
