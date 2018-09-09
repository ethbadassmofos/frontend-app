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
    node: { name }, addr, resolverHistory, ownerHistory = []
  } = ensNode

  const massagedData = processNodeEventData(ownerHistory)

  return (
    <Fragment>
      <Card>
        <div>
        <Label>{`ENS name `}</Label><LabelValue>{`- ${name}`}</LabelValue>
        </div>
        <div>
          <Label>{`Resolve-to-address `}</Label><LabelValue>{`- ${addr || 'Resolver not set'}`}</LabelValue>
        </div>
      </Card>
      <Card>
        <Label className='center'>Ownership History</Label>
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
  display: inline;
  text-align: center;

  &.center {
    display: block;
  }
`

const LabelValue = styled(Label)`
  font-weight: 400;
`

const styledNameView = styled(NameView)`
  display: flex;
`

export default styledNameView
