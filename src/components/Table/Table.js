import React from 'react'

import styled from 'styled-components'

import ChainValue from '../ChainValue'
// import decryptHashes from '../../preimage'
// import R from 'ramda'

class Table extends React.Component {
  state = {
    limit: 25,
    step: 25,
    loadingHashes: false,
    names: {}
  }
  // async getHashes() {
  //   const hashes = data.slice(this.state.limit - step, this.state.limit)
  //   const names = await decryptHashes(hashes).map(node => node.labelHash)
  //   const nameHashMap = R.zipObj(hashes, names)

  //   this.setState({
  //     names: {
  //       ...this.state.names,
  //       ...nameHashMap
  //     },
  //     hashesLoaded: this.state.limit
  //   })
  // }
  // async componentDidMount() {
  //   await this.getHashes()
  // }

  // async componentDidUpdate() {
  //   if (this.state.hashedLoaded === this.state.limit) {
  //     return
  //   }

  //   await this.getHashes()
  // }

  render() {
    const { data, className, paging = false } = this.props
    let slicedData
    if (paging) {
      slicedData = data.slice(0, this.state.limit).map(item => {
        if (this.state.names[item.labelHash]) {
          return {
            ...item,
            name: this.state.names[item.labelHash]
          }
        }

        return item
      })
    }
    const labels = Object.keys(data[0])

    return (
      <div className={className}>
        <ColumnLabels labels={labels} />
        <ColumnData data={paging ? slicedData : data} />
        {paging &&
          data.length >= this.state.limit && (
            <ShowMore
              onClick={() =>
                this.setState(state => ({ limit: state.limit + 25 }))
              }
            >
              Show more
            </ShowMore>
          )}
      </div>
    )
  }
}

const ShowMore = styled('div')`
  color: white;
  text-align center;
  font-weight: 900;
  text-transform: uppercase;
  width: 100%;
  background: #5284ff;
  padding: 20px;
  &:hover {
    cursor: pointer;
  }
`

const ColumnData = ({ data }) =>
  (data || []).map((item, i) => (
    <Row key={i} squatPercent={ item.squatLevel && item.squatLevel.percent || ''}>
      {Object.values(item || {}).map(({ value, options = {} }) => (
        <RowItem>
          <ChainValue type={options.type} value={value} />
        </RowItem>
      ))}
    </Row>
  ))

const ColumnLabels = ({ labels }) => (
  <LabelContainer>
    {labels.map(label => (
      <LabelItem key={label}>{label}</LabelItem>
    ))}
  </LabelContainer>
)

const Row = styled('div')`
  display: flex;
  background: linear-gradient(to right, #adccef  ${({ squatPercent }) => squatPercent}%,#ffffff ${({ squatPercent }) => squatPercent}%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
`

const LabelItem = styled('div')`
  flex: 1 1 0;
  text-align: center;
  font-weight: 800;
  font-size: 18px;
  padding: 10px 20px;
`
const RowItem = styled(LabelItem)`
  font-weight: 400;
  font-size: 16px;
  border-top: 1px dashed #f8f8f8;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  transition: 0.2s;
`

const LabelContainer = styled('div')`
  display: flex;
  flex-direction: row;
  background: #f0f6fa;
`
export default styled(Table)`
  margin: 20px 10%;
  border: 1px solid #ededed;
  box-shadow: inset 0 0 10px 0 rgba(235, 235, 235, 0.5);
  border-radius: 6px;
  background: #fcfcfc;
  display: flex;
  flex-direction: column;

  font-size: 15px;
`
