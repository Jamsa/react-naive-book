import React, { Component } from 'react';
// import * as PropTypes from 'prop-types'

import Header from './Header'
import Content from './Content'

import { Provider } from './react-redux'

// 使用hoc解决37中的问题：
// 1. 大量重复逻辑的问题
// 2. 对context依赖过强


function createStore(reducer){
  let state = null
  const listeners = []
  const subscribe = ( listener ) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({}) //初始化 state
  return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }

  switch (action.type) {
  case 'CHANGE_COLOR':
    return { ...state, themeColor: action.themeColor }
  default:
    return state
  }
}

const store = createStore(themeReducer)

class Index extends Component {
  render () {
    return (
       <div>
          <Header />
          <Content />
        </div>
    )
  }
}

export default class App extends Component{
  render(){
    return (
      <Provider store={store}><Index/></Provider>
    )
  }
}
