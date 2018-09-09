import React from 'react'
import styled from 'styled-components'

import tiger from '../../assets/tiger.png'

const images = {
  tiger: {
    img: tiger,
    title: 'Cool cat!'
  }
}

const StyledImg = styled('img')`
  width: 100%;
  height: auto;
`

export default ({ id, width, style }) => (
  <div style={{ display: 'inline-block', width, ...style }}>
    <StyledImg src={images[id].img} title={images[id].title}/>
  </div>
)
