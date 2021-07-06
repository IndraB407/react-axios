import http from '../../helpers/http'
import jwtDecode from 'jwt-decode';


export const login = (username, password) => {
  return async dispatch => {
    const params = new URLSearchParams();
    params.append('username', username)
    params.append('password', password)
    try {
      dispatch({
        type: "SET_LOGIN_MESSAGE",
        payload: ''
      })
      const results = await http().post(`/api/login`, params)
      const token = results.data.results;
      const tokenData = jwtDecode(token);
      localStorage.setItem('token', token)
      localStorage.setItem("expiresIn", tokenData.exp * 1000)
      localStorage.setItem("role", tokenData.role)
      dispatch({
        type: "LOGIN",
        payload: token,
        payload2: tokenData.role,
      })
    } catch (err) {
      const { message } = err.response.data
      dispatch({
        type: "SET_LOGIN_MESSAGE",
        payload: message
      })
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    try {
      localStorage.clear();
      dispatch({
        type: 'LOGOUT',
      });
    } catch (err) {
      dispatch({
        type: 'LOGOUT',
      });
    }
  };
};

// export const getUser = (token) => {
//   return async (dispatch) => {
//     try {
//       const results = await http(token).get('/api/getById');
//       dispatch({
//         type: 'UPDATE_PROFILE_DETAILS',
//         payload: results.data.results,
//       });
//     } catch (err) {
//       const {message} = err.response.data;
//       dispatch({
//         type: 'SET_UPDATE_PROFILE_DETAILS_MESSAGE',
//         payload: message,
//       });
//     }
//   };
// };