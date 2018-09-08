import React, { Fragment } from 'react';

import styled from 'styled-components'

const Table = ({ data, className }, ...props) => {
  const labels = Object.keys(data[0])

  return (
    <div className={className}>
      <ColumnLabels labels={labels}/>
      <ColumnData data={data} />
    </div>
  )
}

const ColumnData = ({ data }) => {
  return data.map(item => {
    return <Row>
      {
        Object.entries(item).map(value => {
          if (value[0] === 'node') {
            return <RowItem>{value[1].name}</RowItem>
          }
          return <RowItem>{value[1]}</RowItem>
        })
      }
    </Row>
  })
}

const ColumnLabels = ({labels}) => (
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
`

const LabelContainer = styled('div')`
  display: flex;
  flex-direction: row;
  background: #F0F6FA;
`
export default styled(Table)`
  margin: 20px 10%;
  border: 1px solid #EDEDED;
  box-shadow: inset 0 0 10px 0 rgba(235,235,235,0.50);
  border-radius: 6px;
  background: #fcfcfc;
  display:flex;
  flex-direction: column;

  font-size: 15px;
`
