import React, { Fragment } from 'react'
import styled from 'styled-components'

import Table from '../Table'

const AddressView = ({ data }) => {
  const {
    ethereumAddress: { nodes = [], nodeHistory = [] }
  } = data

  const massagedData = nodeHistory.map(item => {
    const array = Object.entries(item)
      .map(value => {
        if (value[0] === 'node') {
          return [value[0], value[1].nameHash]
        }

        if (value[0] === 'actor') {
          return [value[0], value[1].address]
        }
        return value
      })
      .filter(value => value[0] !== '__typename')

    return array.reduce((acc, curr) => {
      acc[curr[0]] = curr[1]
      return acc
    }, {})
  })

  return (
    <Fragment>
      <Table data={massagedData} />
      <Table data={nodes} />
    </Fragment>
  )
}

const styledAddressView = styled(AddressView)`
  display: flex;
`

export default styledAddressView
