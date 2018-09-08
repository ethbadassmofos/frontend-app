import React, { Fragment } from 'react'
import styled from 'styled-components'

import Table from '../Table'

const NameView = ({ data }) => {
  const { ensName: { name, ownerHistory} } = data
  return (
    <Fragment>
      <Table columns={['name', 'owner', 'block', 'TxId']}/>
      <div>{name}</div>
      <div>{ownerHistory[0].address}</div>
    </Fragment>
  )
}

const styledNameView = styled(NameView)`
  display: flex;
`

export default styledNameView
