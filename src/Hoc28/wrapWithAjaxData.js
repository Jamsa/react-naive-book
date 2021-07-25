import React, { Component } from 'react'

const wrapWithAjaxData = (WrappedComponent, name) => {
  class NewComponent extends Component {
    constructor () {
      super()
      this.state = { data: null }
    }

    componentWillMount () {
      var that = this;
      setTimeout(function(){
        let data = localStorage.getItem(name)
        that.setState({ data })
      },3000)
    }

    render () {
      return <WrappedComponent data={this.state.data} />
    }
  }
  return NewComponent
}

export default wrapWithAjaxData