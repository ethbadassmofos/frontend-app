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
  min-height: 300px;
  margin-top: 20px;
  background: #fff;
`

export default styledViewContainer
