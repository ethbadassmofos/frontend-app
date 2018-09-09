import { injectGlobal } from 'styled-components'

const globalStyles = injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Overpass;
    background: #F0F6FA;
  }
`

export default globalStyles
