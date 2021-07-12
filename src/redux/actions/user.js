import http from '../../helpers/http'

export const getUser = (token) => {
    return async (dispatch) => {
      try {
        const results = await http(token).get('/api/users');
        console.log(results.data);
        dispatch({
          type: 'SET_USER_DETAILS',
          payload: results.data.results,
        });
      } catch (err) {
        const {message} = err.response.data;
        dispatch({
          type: 'SET_USER_DETAILS_MESSAGE',
          payload: message,
        });
      }
    };
  };

  export const getBirthdayUser = (date) => {
    return async (dispatch) => {
      const token = localStorage.getItem('token')
      try {
        const results = await http(token).get(`/api/users/birthday?date=${date}`);
        console.log(results.data);
        dispatch({
          type: 'SET_BIRTHDAY_USER',
          payload: results.data.results,
        });
      } catch (err) {
        const {message} = err.response.data;
        dispatch({
          type: 'SET_BIRTHDAY_USER_MESSAGE',
          payload: message,
        });
      }
    };
  };