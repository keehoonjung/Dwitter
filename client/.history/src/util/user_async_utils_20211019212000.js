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

export const userHandleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          user: userReducerUtils.loading(),
        };
      case SUCCESS:
        if (key === "login") {
          return {
            user: userReducerUtils.login_success(action.payload),
          };
        } else {
          return {
            user: userReducerUtils.logout_success(),
          };
        }
      case ERROR:
        return {
          user: userReducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};
