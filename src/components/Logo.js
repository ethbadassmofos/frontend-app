import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ENSLogo from '../assets/ensIconLogo.svg'
import LogoTyped from '../assets/TypeLogo'

const IconLogo = styled('img')`
  width: 34px;
  height: 38px;
`

const LogoContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 20px;
  align-items: center;
  width: 200px;
  text-decoration: none;
`

const LogoText = styled('div')`
  text-decoration: none;
  font-size: 20px;
  color: #808184;
  margin: 0 5px;
`

const Logo = ({ color, className, to = '' }) => (
  <LogoContainer className={className} to={to}>
    <IconLogo src={ENSLogo} />
    <LogoTyped color={color} />
    <LogoText>plorer</LogoText>
  </LogoContainer>
)

export default Logo
