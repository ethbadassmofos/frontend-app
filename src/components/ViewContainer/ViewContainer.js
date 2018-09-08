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
  width: 100%;
  height: calc(100% - 78px);
  margin-top: 78px;
`

export default styledViewContainer
