import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Main from './Lession8';
//import LikeButton from './Lession10';
//import CommentApp from './CommentApp14';
//import CommentApp from './CommentApp17';
//import Index from './Lession18';
//import Index from './Lession19';
//import AutoFocusInput from './Lession21';
//import Index from './Lession22';
//import Index from './Lession23';
//import CommentApp from './CommentApp25';
//import Index from './Hoc28';
//import Index from './Context29';


//import renderAll from './Redux30';
//import renderAll from './Redux31';
//import renderAll from './Redux33';
//import renderAll from './Redux34';
//import Index from './ReactRedux37';
import Index from './ReactRedux38';

import reportWebVitals from './reportWebVitals';

//示例Redux30至Redux34不由React渲染，启用时renderAll变量不能为null
const renderAll=null;



if(renderAll){
  renderAll()
}else{
  ReactDOM.render(
    //<Main />,
    //<LikeButton />,
    //<CommentApp/>,
    <Index />,
    //<AutoFocusInput />,
    document.getElementById('root')
  )

  // ReactDOM.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}
