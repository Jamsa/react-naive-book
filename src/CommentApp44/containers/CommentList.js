import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import { initComments, deleteComment } from '../reducers/comments'
import * as PropTypes from 'prop-types'

// CommentListContainer
// 一个 Smart 组件，负责评论列表数据的加载、初始化、删除评论
// 沟通 CommentList 和 state
class CommentListContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    initComments: PropTypes.func,
    onDeleteComment: PropTypes.func
  }

  UNSAFE_componentWillMount () {
    this._loadComments()
  }

  _loadComments () {
    let comments = localStorage.getItem('comments')
    comments = comments?JSON.parse(comments):[]
    this.props.initComments(comments)
  }

  handleDeleteComment (index) {
    const {comments} = this.props
    // props 是不能变的，所以这里新建一个删除了特定下标的评论列表
    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ]
    // 保存最新的评论列表到 LocalStorage
    localStorage.setItem('comments', JSON.stringify(newComments))
    if (this.props.onDeleteComment) {
      // this.props.onDeleteComment 是 connect 传进来的
      // 会 dispatch 一个 action 去删除评论
      this.props.onDeleteComment(index)
    }
  }

  render(){
    return (
        <CommentList comments={this.props.comments} onDeleteComment={this.handleDeleteComment.bind(this)}/>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    initComments: (comments)=>{
      dispatch(initComments(comments))
    },
    onDeleteComment: (commentIndex)=>{
      dispatch(deleteComment(commentIndex))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer)
