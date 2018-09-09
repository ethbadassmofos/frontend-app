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
    node: { name }, owner: { address }, resolverHistory, ownerHistory = []
  } = ensNode

  const massagedData = processNodeEventData(ownerHistory)

  return (
    <Fragment>
      <Card>
        <Label>{`${name} - ${address}`}</Label>
      </Card>
      <Card>
        <Label textAlign="center">Ownership History</Label>
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
  font-family: Avenir;
  padding: 0;
  display: block;
  text-align: ${props => props.textAlign || 'left'};
`
const styledNameView = styled(NameView)`
  display: flex;
`

export default styledNameView
