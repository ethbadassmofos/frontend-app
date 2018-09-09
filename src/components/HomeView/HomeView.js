import React, { Fragment } from 'react'
import styled from 'styled-components'

import Table from '../Table'
import Card from '../Card'
import { Label } from '../Label'
import { processOwnerStats } from '../../utils/table'

const squatLevelMatrix = squatLevel => {
  if (squatLevel === 1) {
    return 'Over 9000!!!!!'
  } else if (squatLevel > 0.02) {
    return 'Carlos Matos'
  }
  return 'Name Trader'
}

const HomeView = ({ data: { ownerStats } }) => {
  const rawData = processOwnerStats(ownerStats)
  const massagedData = rawData.map(data => ({
    ...data,
    squatLevel: {
      value: squatLevelMatrix(data.nodesOwned.value / rawData[0].nodesOwned.value),
      percent: data.nodesOwned.value / rawData[0].nodesOwned.value * 100
    },
  }))

  console.log(massagedData)
  return (
    <Fragment>
      <Card>
        <Label className='center'>Top Squatters</Label>
        <Table data={massagedData} paging={true} />
      </Card>
    </Fragment>
  )
}

const styledHomeView = styled(HomeView)`
  display: flex;
`

export default styledHomeView
