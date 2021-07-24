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
import CommentApp from './CommentApp25';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  //<Main />,
  //<LikeButton />,
  <CommentApp/>,
  //<Index />,
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
