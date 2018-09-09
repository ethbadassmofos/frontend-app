import React, { Fragment } from 'react'
import styled from 'styled-components'

import Table from '../Table'
import Card from '../Card'
import { processNodeEventData } from '../../utils/table'

const NameView = ({ data: { ensNode } }) => {
  if (!ensNode) {
    return null
  }

  const {
    node: { name }, resolverHistory, ownerHistory = []
  } = ensNode

  const massagedData = processNodeEventData(ownerHistory)

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
