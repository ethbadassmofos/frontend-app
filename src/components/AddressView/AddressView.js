import React, { Fragment } from 'react'
import styled from 'styled-components'

import Table from '../Table'
import { processNodeEventData, processNodeData } from '../../utils/table'

const AddressView = ({ data }) => {
  const {
    ethereumAddress: { nodes = [], nodeHistory = [] }
  } = data

  const massagedData = processNodeEventData(nodeHistory)
  const nodeData = processNodeData(nodes)

  return (
    <Fragment>
      <Table data={massagedData} />
      <Table data={nodeData} />
    </Fragment>
  )
}

const styledAddressView = styled(AddressView)`
  display: flex;
`

export default styledAddressView
