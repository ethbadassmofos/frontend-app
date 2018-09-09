import React, { Component } from 'react'

const VIEW_ON_ETHERSCAN = 'View on Etherscan'

const Tx = ({ value, children }) => (
  <a title={VIEW_ON_ETHERSCAN} href={`https://etherscan.io/tx/${value}`}>{children}</a>
)

const Block = ({ value, children }) => (
  <a title={VIEW_ON_ETHERSCAN} href={`https://etherscan.io/block/${value}`}>{children}</a>
)

const Address = ({ value, children }) => (
  <a title={VIEW_ON_ETHERSCAN} href={`https://etherscan.io/address/${value}`}>{children}</a>
)

const AddressInApp = ({ value, children }) => (
  <a title={'View stats for this address'} href={`/address/${value}`}>{children}</a>
)

export default class ChainValue extends Component {
  render () {
    const { type, value } = this.props

    switch (type) {
      case 'tx': {
        return <Tx value={value}>{value}</Tx>
      }
      case 'block': {
        return <Block value={value}>{value}</Block>
      }
      case 'address': {
        return <Address value={value}>{value}</Address>
      }
      case 'address-in-app': {
        return <AddressInApp value={value}>{value}</AddressInApp>
      }
      default: {
        return value
      }
    }
  }
}
