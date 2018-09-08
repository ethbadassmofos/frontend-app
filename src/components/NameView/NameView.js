import React, { Fragment } from 'react'
import styled from 'styled-components'
import R from 'ramda'

import Table from '../Table'

const NameView = ({ data }) => {
  const { ensName: { name, ownerHistory, resolverHistory} } = data

  const mockResolverData = [
    {
      address: '0xbe2942e14cab5d7bfdc6f008d53445cda2dd8d0a',
      block: 399111,
      txId: '0xfasdfa2sadfgsadfasdasd',
    },
    {
      address: '0xbe2942e14cab5d7bfdc6f008d53445cda2dd8d0a',
      block: 399111,
      txId: '0xfasdfa2sadfgsadfasdasd',
    },
    {
      address: '0xbe2942e14cab5d7bfdc6f008d53445cda2dd8d0a',
      block: 399111,
      txId: '0xfasdfa2sadfgsadfasdasd',
    }
  ]
  const mockName = 'ASSHOLEJEFF'
  const columnData = [
    {
      node: {
        name: 'hi.huanzhang.eth',
        label: 'hi',
        node: 'huanzhang.eth'
      },
      actor: '0xffff',
      block: 309999,
      tx: '0xfff',
      action: 'bid'
    },
    {
      node: {
        name: 'sup.jefflau.eth',
        label: 'hi',
        node: 'jefflau.eth'
      },
      actor: '0x11233aff',
      block: 399111,
      tx: '0xfassdfsdfff',
      action: 'buy'
    },
    {
      node: {
        name: 'hello.love.eth',
        label: 'hello',
        node: 'love.eth'
      },
      actor: '0xffffasss',
      block: 211145,
      tx: '0xfffasss',
      action: 'asdfjkasdj'
    }
  ]
  const { ensNode } = data
  return (
    <Fragment>
      <Table data={columnData}/>
      <Table data={mockResolverData} />
      {console.log(ensNode)}
    </Fragment>
  )
}

const styledNameView = styled(NameView)`
  display: flex;
`

export default styledNameView
