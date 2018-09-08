import React from 'react'

import styled from 'styled-components'

const Table = ({ data, className }) => {
  const labels = Object.keys(data[0])

  return (
    <div className={className}>
      <ColumnLabels labels={labels} />
      <ColumnData data={data} />
    </div>
  )
}

const ColumnData = ({ data }) => {
  return data.map(item => {
    return (
      <Row>
        {Object.values(item).map(value => {
          return <RowItem>{value}</RowItem>
        })}
      </Row>
    )
  })
}

const ColumnLabels = ({ labels }) => (
  <LabelContainer>
    {labels.map(label => (
      <LabelItem key={label}>{label}</LabelItem>
    ))}
  </LabelContainer>
)

const Row = styled('div')`
  display: flex;
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

  &:hover {
    text-overflow: initial;
    overflow: visible;
  }
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
