const detailsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_IMAGE_DETAIL':
        return action.payload[0];
      default:
        return state;
    }
  };
  
export default detailsReducer;