import React, { Fragment } from 'react'
import styled from 'styled-components'

import Table from '../Table'

const NameView = ({ data }) => {
  const {
    ensNode: { resolverHistory, ownerHistory = [] }
  } = data

  const massagedData = ownerHistory.map(item => {
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
      {resolverHistory === null ? '' : <Table data={resolverHistory} />}
    </Fragment>
  )
}

const styledNameView = styled(NameView)`
  display: flex;
`

export default styledNameView
