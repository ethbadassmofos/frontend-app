import React from 'react'
import styled from 'styled-components'

import Doge from '../../assets/ngvton.jpg'

const NotDoge = styled('img')`
  width: 250px;
  height: 250px;
  margin-bottom: 15px;
`

const NotFoundText = styled('div')`
  font-family: Avenir, Overpass, sans-serif;
  font-size: 18px;
  position: relative;
  text-align: center;
`

const NotFoundContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  top: 30%;
`

const NotFound = ({ className }) => (
  <NotFoundContainer className={className}>
    <NotDoge src={Doge}/>
    <NotFoundText>Sorry we could not find what you are looking for ;(</NotFoundText>
  </NotFoundContainer>
)

export default NotFound
