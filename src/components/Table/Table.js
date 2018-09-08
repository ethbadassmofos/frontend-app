import React, { Fragment } from 'react';

import styled from 'styled-components'

const Table = props => {
  const { columns } = props
  return (
    <div className={props.className}>
      <ColumnLabels columns={columns}/>
    </div>
  )
}

const ColumnLabels = ({columns}) => (
  <div className='column-labels'>
    {columns.map(label => (
      <label className='label-item' key={label}>{label}</label>
    ))}
  </div>

)
export default styled(Table)`
  display:flex;
  flex-direction: column;

  font-size: 15px;
  font-weight: 800;

  .column-labels {
    display: flex;
    flex-direction: row;

    .label-item {
      flex: 1 1 0;
    }
  }
`
