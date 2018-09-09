import React, { Fragment } from 'react'
import styled from 'styled-components'

import Table from '../Table'
import Card from '../Card'
import { Label, LabelValue } from '../Label'
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
          <Label>{`Resolve-to-address `}</Label><LabelValue>{`- ${addr || 'Address not set'}`}</LabelValue>
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

const styledNameView = styled(NameView)`
  display: flex;
`

export default styledNameView
