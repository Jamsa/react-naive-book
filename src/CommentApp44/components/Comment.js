import React, { Component } from "react"
import * as PropTypes from 'prop-types'

export default class Comment extends Component{
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }

  constructor () {
    super()
    this.state = { timeString: '' }
  }

  UNSAFE_componentWillMount() {
    this._updateTimeString()

    //定时更新时间
    this._timer = setInterval(
      this._updateTimeString.bind(this),
      5000
    )
  }

  UNSAFE_componentWillUnmount(){
    clearInterval(this._timer)
  }

  _updateTimeString () {
    const {comment} = this.props
    const duration = (+Date.now() - comment.createdTime) / 1000
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }

  _getProcessedContent (content) {
    return content
      .replace(/&/g, "&amp;") // 防止注入任意html代码
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>') //将``和之间的内容替换成<code>...</code>
  }

  handleDeleteComment(){
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }

  render() {
    const {comment} = this.props
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username} </span>：
        </div>
        <p dangerouslySetInnerHTML={{__html: this._getProcessedContent(comment.content)}}></p>
        <span className='comment-createdtime'>
          {comment.timeString}
        </span>
        <span
          onClick={this.handleDeleteComment.bind(this)}
          className='comment-delete'>
          删除
        </span>
      </div>
    )
  }
}
