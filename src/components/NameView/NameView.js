import React, { Fragment } from 'react'
import styled from 'styled-components'

import Table from '../Table'
import Card from '../Card'

const NameView = ({ data }) => {
  const {
    ensNode: { node: { name }, resolverHistory, ownerHistory = [] }
  } = data
  const massagedData = ownerHistory.map(item => {
    const array = Object.entries(item)
      .map(value => {
        if (value[0] === 'node') {
          return [ value[0], value[1].nameHash ]
        }

        if (value[0] === 'actor') {
          return [ value[0], value[1].address ]
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
      <Card>
        <Label>{`ENS Name - ${name}`}</Label>
      </Card>
      <Card>
        <Label>Ownership History</Label>
        <Table data={massagedData} />
      </Card>
      {resolverHistory === null ? '' : <Table data={resolverHistory} />}
    </Fragment>
  )
}

const Label = styled('label')`
  font-size: 20px;
  color: #2f2833;
  font-weight: 700;
  line-height: 1.35;
  padding: 0;
  display: block;
`
const styledNameView = styled(NameView)`
  display: flex;
`

export default styledNameView
