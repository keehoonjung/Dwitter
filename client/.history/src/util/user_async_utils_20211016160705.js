import { reducerUtils } from "./async_utils";

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
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      dispatch({
        type: ERROR,
        payload: `Error: ${param.username} already exists`,
      });
    }
  };
};

export const userReducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    login: false,
    data: null,
    error: null,
  }),
  loading: () => ({
    loading: true,
    login: false,
    data: null,
    error: null,
  }),
  login_success: (payload) => ({
    loading: false,
    login: true,
    data: payload,
    error: null,
  }),
  logout_success: () => ({
    loading: false,
    login: false,
    data: null,
    error: null,
  }),
  error: (error) => ({
    loading: false,
    login: false,
    data: null,
    error: error,
  }),
};

export const handleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          user: userReducerUtils.loading,
        };
      case SUCCESS:
        if (key === "login") {
          return {
            user: userReducerUtils.login_success,
          };
        } else {
          return {
            user: userReducerUtils.logout_success,
          };
        }
    }
  };
};
