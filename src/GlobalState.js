import React, { createContext, Component } from 'react'
import { withRouter } from 'react-router'

const GlobalContext = createContext({})
const GlobalConsumer = GlobalContext.Consumer

class Provider extends Component {
  state = {
    searchQuery: null
  }

  onSearch = searchQuery => {
    console.log('SEEEEARCH', searchQuery)
    this.props.history.push(`/name/${searchQuery}`)
    this.setState({ searchQuery })
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
          ...this.state,
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
