import React from 'react'
import styled from 'styled-components'

import tiger from '../../assets/tiger.png'

const images = {
  reverseResolution: {
    img: tiger,
    title: 'Reverse resolution available!'
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
