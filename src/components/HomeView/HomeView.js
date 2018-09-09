import React, { Fragment } from 'react'
import styled from 'styled-components'

import Table from '../Table'
import Card from '../Card'
import { processOwnerStats } from '../../utils/table'

const HomeView = ({ data: { ownerStats } }) => {
  const massagedData = processOwnerStats(ownerStats)

  return (
    <Fragment>
      <Card>
        <Table data={massagedData} paging={true} />
      </Card>
    </Fragment>
  )
}

const styledHomeView = styled(HomeView)`
  display: flex;
`

export default styledHomeView
