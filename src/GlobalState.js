import React, { createContext, Component } from 'react'

const GlobalContext = createContext({})
const GlobalConsumer = GlobalContext.Consumer

export class GlobalProvider extends Component {
  state = {
    searchQuery: null
  }

  onSearch = searchQuery => {
    console.log('SEEEEARCH', searchQuery)
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

export default GlobalConsumer
