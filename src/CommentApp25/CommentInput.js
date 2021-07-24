import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

export default class CommentInput extends Component {

  //类型约束
  static propTypes = {
    onSubmit: PropTypes.func
  }
  
  constructor(){
    super()
    this.state = {
      username: '',
      content: '',
      createdTime: +new Date()
    }
  }

  //结合 textarea 上的 ref 实现自动聚焦
  componentDidMount () {
    this.textarea.focus()
  }

  //自动加载用户名
  componentWillMount(){
    this._loadUsername()
  }

  //操作localStorage的私有方法
  _loadUsername(){
    const username = localStorage.getItem('username')
    if(username){
      this.setState({username})
    }
  }

  _saveUsername(username){
    localStorage.setItem('username',username)
  }

  handleUsernameChange(event){
    this.setState({
      username: event.target.value
    })
  }

  handleContentChange(event){
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit(){
    if(this.props.onSubmit){
      const {username,content} = this.state
      this.props.onSubmit({
        username,
        content,
        createdTime: +new Date()
      })
    }
    this.setState({content:''})
  }

  //自动保存用户名
  handleUsernameBlur(event){
    this._saveUsername(event.target.value)
  }

  render() {
    return (
      <div className='comment-input'>
      <div className='comment-field'>
        <span className='comment-field-name'>用户名：</span>
        <div className='comment-field-input'>
          <input 
          value={this.state.username} 
          onBlur={this.handleUsernameBlur.bind(this)}
          onChange={this.handleUsernameChange.bind(this)} 
          />
        </div>
      </div>
      <div className='comment-field'>
        <span className='comment-field-name'>评论内容：</span>
        <div className='comment-field-input'>
          <textarea 
          ref={(textarea) => this.textarea = textarea} 
          value={this.state.content}
          onChange={this.handleContentChange.bind(this)} />
        </div>
      </div>
      <div className='comment-field-button'>
        <button onClick={this.handleSubmit.bind(this)}>
          发布
        </button>
      </div>
    </div>
    )
  }
}