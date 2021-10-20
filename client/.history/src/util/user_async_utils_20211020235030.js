import TokenStorage from "../db/token";

export const createLoginPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    dispatch({ type });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      dispatch({ type: ERROR, payload: e.toString() });
    }
  };
};

export const CreateIdPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (param) => async (dispatch) => {
    dispatch({ type });
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
  initial: (initialToken) => ({
    loading: false,
    token: initialToken,
    data: null,
    error: null,
  }),
  loading: (prevToken) => ({
    loading: true,
    token: prevToken,
    data: null,
    error: null,
  }),
  login_success: (payload) => ({
    loading: false,
    token: payload.token,
    data: payload,
    error: null,
  }),
  logout_success: () => ({
    loading: false,
    token: null,
    data: null,
    error: null,
  }),
  error: (error) => ({
    loading: false,
    token: null,
    data: null,
    error: error,
  }),
};

export const userHandleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        const token = tokenStorage.getToken();
        return userReducerUtils.loading(token);
      case SUCCESS:
        if (key === "login") {
          return userReducerUtils.login_success(action.payload);
        } else {
          return userReducerUtils.logout_success();
        }
      case ERROR:
        return userReducerUtils.error(action.payload);
      default:
        return state;
    }
  };
};
