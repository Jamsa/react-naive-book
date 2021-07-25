//不使用react的redux
//33 共享结构的对象提高性能


export default function renderAll (){
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
    const store = createStore(appState, stateChanger)
    let oldState = store.getState() // 缓存旧的 state

    //改变后自动重新渲染
    store.subscribe(()=>{
      const newState = store.getState()
      renderApp(newState,oldState)
      oldState = newState
    })
    renderApp(store.getState()) // 首次渲染页面
    store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
    store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色


    //renderApp(store.getState()) // 把新的数据渲染到页面上
}  

function renderApp(appState, oldAppState={}) {
    if (appState === oldAppState) return // 数据没有变化就不渲染了
    console.log('render app...')
    document.getElementById('root').innerHTML = '<div id="title"></div><div id="content"></div>';
    renderTitle(appState.title, oldAppState.title)
    renderContent(appState.content, oldAppState.content)
}

function renderTitle (title,oldTitle={}) {
    if (title === oldTitle) return // 数据没有变化就不渲染了
    console.log('render title...')
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}

function renderContent (content, oldContent={}) {
  if (content === oldContent) return // 数据没有变化就不渲染了
    console.log('render content...')
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}

function stateChanger (state, action) {
    switch (action.type) {
      case 'UPDATE_TITLE_TEXT':
        //state.title.text = action.text
        //break
        return {
          ...state,
          title:{
            ...state.title,
            text: action.text
          }
        }
      case 'UPDATE_TITLE_COLOR':
        //state.title.color = action.color
        //break
        return {
          ...state,
          title:{
            ...state.title,
            color: action.color
          }
        }
      default:
        break
    }
  }

function createStore (state, stateChanger) {
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)

    const getState = () => state //返回的是闭包参数
    const dispatch = (action) => {
        state = stateChanger(state, action) // 监听执行时，state 已经改变
        listeners.forEach((listener) => listener())
    }
    return { getState, dispatch, subscribe }
}

