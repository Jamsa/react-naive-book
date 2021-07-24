import React, { Component } from 'react';

// props.children的使用
class Card extends Component {

  render () {
    return (
      <div className='card'>
        <div className='card-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default class Index extends Component{
  render(){
    return (
      <Card>
        <h2>React.js 小书</h2>
        <div>开源、免费、专业、简单</div>
        订阅：<input />
      </Card>
    )
  }
}