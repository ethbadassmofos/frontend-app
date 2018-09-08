import React, { Component } from 'react'

const Tx = ({ value, children }) => (
  <a href={`https://etherscan.io/tx/${value}`}>{children}</a>
)

const Block = ({ value, children }) => (
  <a href={`https://etherscan.io/block/${value}`}>{children}</a>
)

const Address = ({ value, children }) => (
  <a href={`https://etherscan.io/address/${value}`}>{children}</a>
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
      default: {
        return value
      }
    }
  }
}
