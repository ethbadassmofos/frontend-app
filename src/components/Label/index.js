import styled from 'styled-components'

export const Label = styled('label')`
  font-size: 20px;
  color: #2f2833;
  font-weight: 700;
  line-height: 1.35;
  font-family: Avenir;
  padding: 0;
  display: inline;
  text-align: center;

  &.center {
    display: block;
  }
`

export const LabelValue = styled(Label)`
  font-weight: 400;
`
