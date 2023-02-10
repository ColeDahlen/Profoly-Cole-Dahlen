const forumReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FORUM':
        return action.payload;
      default:
        return state;
    }
  };
  
export default forumReducer;