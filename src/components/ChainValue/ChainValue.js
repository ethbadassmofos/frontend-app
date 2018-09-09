import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Img from '../Img'
import { provider } from '../../ethers'

const VIEW_ON_ETHERSCAN = 'View on Etherscan'

const Tx = ({ value }) => (
  <a title={VIEW_ON_ETHERSCAN} href={`https://etherscan.io/tx/${value}`}>{value}</a>
)

const Block = ({ value }) => (
  <a title={VIEW_ON_ETHERSCAN} href={`https://etherscan.io/block/${value}`}>{value}</a>
)


class Address extends PureComponent {
  state = {
    resolvedName: null
  }

  static propTypes = {
    children: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.componentDidUpdate()
  }

  componentDidUpdate (prevProps = {}) {
    if (this.props.value !== prevProps.value) {
      this.setState({
        resolvedName: null
      }, () => {
        const { value } = this.props

        provider.lookupAddress(value)
          .then(resolvedName => {
            this.setState({ resolvedName })
          })
          .catch(console.error.bind(console))
      })
    }
  }

  render () {
    return this.props.children(this.state.resolvedName)
  }
}



class AddressInApp extends PureComponent {
  render () {
    const { value } = this.props

    return (
      <Address value={value}>
        {resolvedName => (
          <span>
            {resolvedName ? (
              <Img id='tiger' width='20px' style={{
                position: 'absolute',
                left: 0,
                top: '60%',
                transform: 'translateY(-50%)'
              }} />
            ) : null}
            <a title='View stats for this address' href={`/address/${value}`}>
              {value}
            </a>
            {resolvedName ? (
              <a
                style={{ 'margin-left': '0.5em' }}
                title='View stats for this name' href={`/name/${resolvedName}`}
              >
                ({resolvedName})
              </a>
            ) : null}
          </span>
        )}

      </Address>
    )
  }
}



export default class ChainValue extends PureComponent {
  render () {
    const { type, value } = this.props

    switch (type) {
      case 'tx': {
        return <Tx value={value} />
      }
      case 'block': {
        return <Block value={value} />
      }
      case 'address': {
        return <AddressInApp value={value} />
      }
      default: {
        return value
      }
    }
  }
}
