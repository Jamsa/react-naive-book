import React, { Component } from 'react';

class Clock extends Component {
  constructor () {
    super()
    this.state = {
      date: new Date()
    }
  }

  componentWillMount () {
    console.log('will mount',' set interval ')
    this.timer = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }


  //如果不在Unmount前清理定时器，会产生警告：
  // Warning: Can't perform a React state update on an unmounted component.
  componentWillUnmount () {
    console.log('will unmount',' clear interval ')
    clearInterval(this.timer)
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('should component update')
    return true
  }

  componentWillReceiveProps(nextProps){
    console.log('componet will receive props')
  }
  componentDidUpdate(){
    console.log('did update')
  }
  componentWillUpdate(){
    console.log('will update')
  }

  render () {
    return (
      <div>
        <h1>
          <p>现在的时间是</p>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    )
  }
}

export default class Index extends Component {
    constructor() {
      super()
      this.state = {isShowClock: true}
    }

    handleShowOrHide () {
      this.setState({
        isShowClock: !this.state.isShowClock
      })
    }

    render () {
        return (
          <div>
            {this.state.isShowClock ? <Clock /> : null }
            <button onClick={this.handleShowOrHide.bind(this)}>
              显示或隐藏时钟
            </button>
          </div>
        )
    }
}