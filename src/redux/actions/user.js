import http from '../../helpers/http'

export const getUser = (token) => {
    return async (dispatch) => {
      try {
        const results = await http(token).get('/api/getById');
        dispatch({
          type: 'UPDATE_PROFILE_DETAILS',
          payload: results.data.results,
        });
      } catch (err) {
        const {message} = err.response.data;
        dispatch({
          type: 'SET_UPDATE_PROFILE_DETAILS_MESSAGE',
          payload: message,
        });
      }
    };
  };