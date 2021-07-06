const initialState = {
    token: null,
    profile: {},
    errorMsg: '',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_PROFILE_DETAILS': {
        return {
          ...state,
          profile: action.payload,
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
  };
  
  export default userReducer;
  