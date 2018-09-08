import React, { Fragment } from 'react'
import styled from 'styled-components'

import Table from '../Table'

const NameView = ({ data }) => {
  const {
    ensNode: { node: { name }, resolverHistory, ownerHistory = [] }
  } = data
  console.log(data)
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

const Card = styled('div')`
  width: 90%;
  background: #fff;
  margin: 64px auto 0;
  padding: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`

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
