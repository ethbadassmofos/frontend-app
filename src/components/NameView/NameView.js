import React, { Fragment } from 'react'
import styled from 'styled-components'

import Table from '../Table'

const NameView = ({ data }) => {
  const { ensNode } = data
  return (
    <Fragment>
      {console.log(data)}
      <Table columns={['name', 'owner', 'block', 'TxId']} />
    </Fragment>
  )
}

const styledNameView = styled(NameView)`
  display: flex;
`

export default styledNameView
