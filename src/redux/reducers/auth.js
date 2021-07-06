const initialState = {
  token: null,
  role: '',
  errorMsg: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        token: action.payload,
        role: action.payload2,
      }
    }
    case 'SET_LOGIN_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        token: null,
        role: '',
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default authReducer