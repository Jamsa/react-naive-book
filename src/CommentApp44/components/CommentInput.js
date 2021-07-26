import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

export default class CommentInput extends Component {

  //类型约束
  static propTypes = {
    username: PropTypes.string,
    onSubmit: PropTypes.func,
    onUserNameInputBlur: PropTypes.func
  }

  static defaultProps = {
    username: ''
  }

  constructor(props){
    super()
    this.state = {
      username: props.username,
      content: ''
    }
  }

  //结合 textarea 上的 ref 实现自动聚焦
  UNSAFE_componentDidMount () {
    this.textarea.focus()
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
      const {username, content} = this.state
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
    if(this.props.onUserNameInputBlur){
      this.props.onUserNameInputBlur(event.target.value)
    }
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
