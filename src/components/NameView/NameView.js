import React, { Fragment } from 'react'
import styled from 'styled-components'

import Table from '../Table'
import Card from '../Card'

const NameView = ({ data }) => {
  const {
    ensNode: { node: { name }, resolverHistory, ownerHistory = [] }
  } = data
  console.log(data)
  const massagedData = ownerHistory.map(item => {
    const array = Object.entries(item)
      .map(value => {
        switch (value[0]) {
          case 'node': {
            value = [ value[0], value[1].nameHash ]
            break
          }
          case 'actor': {
            value = [ value[0], value[1].address, { type: 'address' } ]
            break
          }
          default: {
            value.push({ type: value[0] })
          }
        }

        return value
      })
      .filter(value => value[0] !== '__typename')

    return array.reduce((acc, curr) => {
      acc[curr[0]] = { value: curr[1], options: curr[2] || {} }
      return acc
    }, {})
  })

  return (
    <Fragment>
      <Card>
        <Label>{`ENS Name - ${name}`}</Label>
      </Card>
      <Card>
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
