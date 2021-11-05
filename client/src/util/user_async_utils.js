import TokenStorage from "../db/token";

const tokenStorage = new TokenStorage();

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
        payload: e.toString(),
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
  error: (prevState = null, error) => ({
    loading: false,
    token: null,
    data: prevState,
    error: error.toString(),
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
        const prevState = state && state.data;
        return userReducerUtils.error(prevState, action.payload);
      default:
        return state;
    }
  };
};
