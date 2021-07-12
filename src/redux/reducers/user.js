const initialState = {
  token: null,
  profile: {},
  birthday: {},
  errorMsg: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DETAILS': {
      return {
        ...state,
        profile: action.payload,
      };
    }
    case 'SET_USER_DETAILS_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    case 'SET_BIRTHDAY_USER': {
      return {
        ...state,
        birthday: action.payload,
      };
    }
    case 'SET_BIRTHDAY_USER_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
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
