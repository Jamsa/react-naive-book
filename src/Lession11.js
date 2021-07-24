import React, { Component } from 'react';

export default class LikeButton extends Component{
    //使用defaultProps，不需要在render中那样检查值是否存在
    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }

    constructor(){
        super()
        this.state = {isLiked: true}
    }
    handleClickOnLikeButton () {
        //改变props是无效的，旧版本会报错
        //this.props.likedText = 'aaa'

        console.log(this.state.isLiked)
        this.setState({
          isLiked: !this.state.isLiked
        })
        //并不会立即变化
        console.log(this.state.isLiked)

        //向setState中传入回调才能实现逐步执行。回调的参数是上一个setState的结果
        //这连续三个setState只会导致组件一次重新渲染
        this.setState((prevState) => {
            return { count: 0 }
          })
        this.setState((prevState) => {
            return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
        })
        this.setState((prevState) => {
            console.log(prevState.count)
            return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
        })
    }

    

    render(){
        //const likedText = this.props.likedText || '取消'
        //const unlikedText = this.props.unlikedText || '点赞'
        const {likedText,unlikedText} = this.props

        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
            {this.state.isLiked ? likedText : unlikedText} 👍
            </button>
        )
    }
}