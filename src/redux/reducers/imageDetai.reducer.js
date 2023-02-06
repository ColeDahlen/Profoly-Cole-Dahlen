const detailsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_IMAGE_DETAIL':
        return action.payload;
      default:
        return state;
    }
  };
  
export default detailsReducer;