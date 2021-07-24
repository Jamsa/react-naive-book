import React, { Component } from 'react';

// dangerouslySetInnerHTML 和 style
class Editor extends Component {
  constructor() {
    super()
    this.state = {
      content: '<h1>React.js 小书</h1>'
    }
  }

  // 这会导致直接输出 this.state.content的 html源码
  /*render () {
    return (
      <div className='editor-wrapper'>
        {this.state.content}
      </div>
    )
  }*/

  // render不能直接用font-size这种style写法
  // 错误<h1 style='font-size: 12px; color: red;'>React.js 小书</h1>
  render () {
    return (
      <>
      <h1 style={{fontSize: '12px', color: 'red'}}>React.js 小书</h1>
      <div className='editor-wrapper' dangerouslySetInnerHTML={{__html: this.state.content}}>
      </div>
      </>
    )
  }
}

export default class Index extends Component{
  render(){
    return (
      <Editor />
    )
  }
}