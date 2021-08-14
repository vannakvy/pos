export const commentsReducers = (state = { comments: [] }, action) => {
 switch (action.type) {
  case 'GET_COMMENTS_REQ':
   return { loading: true };
  case 'GET_COMMENTS':
   return { loading: false, comments: action.payload };
  case 'GET_COMMENTS_FAI':
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};
