import React, { Fragment } from 'react'
import styled from 'styled-components'

import Card from '../Card'
import Table from '../Table'
import { Label, LabelValue } from '../Label'
import { processNodeEventData, processNodeData } from '../../utils/table'

const AddressView = ({ data, address }) => {
  const {
    ethereumAddress: { nodes = [], nodeHistory = [] }
  } = data

  const massagedData = processNodeEventData(nodeHistory)
  const nodeData = processNodeData(nodes)
  return (
    <Fragment>
      <Card>
        <div>
        <Label>{`Address `}</Label><LabelValue>{`- ${address}`}</LabelValue>
        </div>
        <div>
          <Label>{`Total names owned `}</Label><LabelValue>{`- ${massagedData.length || 'Address not set'}`}</LabelValue>
        </div>
      </Card>
      <Card>
        <Label className="center">ENS names owned</Label>
        <Table data={nodeData} paging={true} />
      </Card>
      <Card>
        <Label className="center">ENS activity log</Label>
        <Table data={massagedData} paging={true} />
      </Card>

    </Fragment>
  )
}

const styledAddressView = styled(AddressView)`
  display: flex;
`

export default styledAddressView
