export const createLoginPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    dispatch({ type });
    const user = await promiseCreator;
    if (!user) {
      return dispatch({
        type: ERROR,
        payload: "Error: Invalid user or password fail",
      });
    } else {
      user.password === password
        ? dispatch({ type: SUCCESS, payload: user })
        : dispatch({
            type: ERROR,
            payload: "Error: Invalid user or password fail",
          });
    }
  };
};
