import React, { Component } from 'react'
import wrapWithLoadData from './wrapWithLoadData'
import wrapWithAjaxData from './wrapWithAjaxData'

class InputWithUserName extends Component {
  render () {
    return <input value={this.props.data} />
  }
}

//可以灵活的在不同的hoc间切换，实现不同的效果
//InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')
InputWithUserName = wrapWithAjaxData(InputWithUserName, 'username')
export default InputWithUserName