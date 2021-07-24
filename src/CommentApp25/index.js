import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css';

export default class CommentApp extends Component {

  constructor(){
    super()
    // comments 状态数据并没有放到到CommentList组件中，而是提到了此处。
    // 因为React并没有直接提供方案解决组件间共享状态的问题。
    // 如果将CommentApp嵌入其他应用，这里的comments状态数据同样会面临需要提取至更高层的应用中的问题。
    this.state = {
      comments:[] 
    }
  }

  componentWillMount () {
    this._loadComments()
  }

  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }

  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  handleSubmitComment(comment){
    //console.log(comment);
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    
    const comments = this.state.comments;
    comments.push(comment)

    this.setState({
      comments:this.state.comments
    })

    this._saveComments(comments)
  }

  handleDeleteComment (index) {
    console.log(index)
    const {comments} = this.state
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList 
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment.bind(this)}
          />
      </div>
    )
  }
}