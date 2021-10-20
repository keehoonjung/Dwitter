export const tweetsPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    dispatch({ type });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true });
    }
  };
};

const defaultIdSelector = (param) => param;
export const tweetPromiseThunkById = (
  type,
  promiseCreator,
  idSelector = defaultIdSelector
) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    const id = idSelector(param);
    console.log(typeof id);
    console.log(id);
    dispatch({ type, meta: id });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload, meta: id });
    } catch (e) {
      console.log(e);
      dispatch({ type: ERROR, error: true, payload: e, meta: id });
    }
  };
};

export const tweetsReducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: null,
    error: null,
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  error: (error) => ({
    loading: false,
    data: null,
    error: error,
  }),
};

const handleAsyncActions = (callback) => {
  return (type, key) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
      switch (action.type) {
        case type:
          const prevState = state[key] && state[key].data;
          console.log(prevState);
          return {
            ...state,
            [key]: prevState
              ? tweetsReducerUtils.loading(prevState)
              : tweetsReducerUtils.loading(),
          };
        case SUCCESS:
          return callback(key, state, action);
        case ERROR:
          return {
            ...state,
            [key]: tweetsReducerUtils.error(action.payload),
          };
        default:
          return state;
      }
    };
  };
};

const getAsyncActionCallback = (key, state, action) => ({
  ...state,
  [key]: tweetsReducerUtils.success(action.payload),
});

const postAsyncActionCallback = (key, state, action) => {
  const result = action.payload;
  return {
    ...state,
    [key]: {
      loading: false,
      data: result ? [result, ...state[key].data] : state.posts.data,
      error: null,
    },
  };
};

const deleteAsyncActionCallback = (key, state, action) => {
  console.log(state);
  return {
    ...state,
    posts: {
      loading: false,
      data: state.posts.data
        ? state.posts.data.filter((tweet) => tweet.id !== action.meta)
        : null,
      error: null,
    },
  };
};

const updateAsyncActionCallback = (key, state, action) => ({
  ...state,
  posts: {
    loading: false,
    data: state.posts.data
      ? state.posts.data.map((tweet) => {
          if (tweet.id !== action.meta) {
            return tweet;
          }
          return action.payload;
        })
      : null,
    error: null,
  },
});

export const handleAsyncGetTweetsActions = handleAsyncActions(
  getAsyncActionCallback
);
export const handleAsyncPostTweetActions = handleAsyncActions(
  postAsyncActionCallback
);
export const handleAsyncDeleteTweetActions = handleAsyncActions(
  deleteAsyncActionCallback
);
export const handleAsyncUpdateTweetActions = handleAsyncActions(
  updateAsyncActionCallback
);
