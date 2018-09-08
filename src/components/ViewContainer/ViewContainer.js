import React, { Component } from 'react'
import styled from 'styled-components'

class ViewContainer extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
}

const styledViewContainer = styled(ViewContainer)`
  width: 300px;
  height: 300px;
`

export default styledViewContainer
