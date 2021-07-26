import React, {Component} from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
import './index.css'

const store = createStore(commentsReducer)

export default class CommentAppContainer extends Component {

  render(){
    return (
      <Provider store={store}>
        <CommentApp />
      </Provider>
    )
  }
}
