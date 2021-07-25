//不使用react的redux
//30 优雅地修改共享状态

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
    //第一版
    renderApp(appState) //首次渲染
    dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
    dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
    renderApp(appState) //再次渲染
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

//第一版
function dispatch (action) {
    switch (action.type) {
      case 'UPDATE_TITLE_TEXT':
        appState.title.text = action.text
        break
      case 'UPDATE_TITLE_COLOR':
        appState.title.color = action.color
        break
      default:
        break
    }
}