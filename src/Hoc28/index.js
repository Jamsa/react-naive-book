import React, { Component } from 'react'
import InputWithUserName from './InputWithUserName'

export default class Index extends Component {
  render () {
    return (
      <div>
        用户名：<InputWithUserName />
      </div>
    )
  }
}