const INIT_COMMENTS = 'INIT_COMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

// reducer
export default function(state, action){
  if(!state){
    return { comments: [] }
  }

  switch(action.type){
  case INIT_COMMENTS:
    return { comments: action.comments }
  case ADD_COMMENT:
    return { comments: [...state.comments, action.comment] }
  case DELETE_COMMENT:
    return { comments: [
      ...state.comments.slice(0, action.commentIndex),
      ...state.comments.slice(action.commentIndex+1)
    ] }
  default:
    return state
  }
}

// action creators
export const initComments = (comments)=>{
  return {type: INIT_COMMENTS, comments: comments}
}

export const addComment = (comment)=>{
  return {type: ADD_COMMENT, comment: comment}
}

export const deleteComment = (commentIndex)=>{
  return {type: DELETE_COMMENT, commentIndex: commentIndex}
}
