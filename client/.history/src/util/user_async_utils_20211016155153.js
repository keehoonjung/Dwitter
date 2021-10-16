export const createLoginPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    dispatch({ type });
    try {
      const user = await promiseCreator(param.id);
      if (!user) {
        return dispatch({
          type: ERROR,
          payload: "Error: Invalid user or password fail",
        });
      } else {
        user.password === param.password
          ? dispatch({ type: SUCCESS, payload: user })
          : dispatch({
              type: ERROR,
              payload: "Error: Invalid user or password fail",
            });
      }
    } catch (e) {
      dispatch({ type: ERROR, payload: e.toString() });
    }
  };
};

export const CreateIdPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (param) => async (dispatch) => {
    dispatch({ type });
    if (param.password.lenth < 5) {
      return dispatch({
        type: ERROR,
        payload: "Error: password should be at least 5 characters",
      });
    }
  };
};
