//不使用react的redux
//31 抽离 store 和监控数据变化

const appState = {
    title: {
      text: 'React.js 小书',
      color: 'red',
    },
    content: {
      text: 'React.js 小书内容',
      color: 'blue'
    }
  }

export default function renderAll (){
    //第二版
    const store = createStore(appState, stateChanger)
    //改变后自动重新渲染
    store.subscribe(()=>renderApp(store.getState()))
    renderApp(store.getState()) // 首次渲染页面
    store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
    store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色


    //renderApp(store.getState()) // 把新的数据渲染到页面上
}  

function renderApp(appState) {
    document.getElementById('root').innerHTML = '<div id="title"></div><div id="content"></div>';
    renderTitle(appState.title)
    renderContent(appState.content)
}

function renderTitle (title) {
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}

function renderContent (content) {
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}

//第二版
function stateChanger (state, action) {
    switch (action.type) {
      case 'UPDATE_TITLE_TEXT':
        state.title.text = action.text
        break
      case 'UPDATE_TITLE_COLOR':
        state.title.color = action.color
        break
      default:
        break
    }
  }

function createStore (state, stateChanger) {
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)

    const getState = () => state
    const dispatch = (action) => {
        stateChanger(state, action)
        listeners.forEach((listener) => listener())
    }
    return { getState, dispatch, subscribe }
}

