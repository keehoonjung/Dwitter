export const tweetsPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true });
    }
  };
};

export const createTweetPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    try {
      await promiseCreator(param);
      dispatch({ type: SUCCESS });
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
    data: null,
    error: null,
  }),
  success: (payload) => ({
    data: payload,
    error: null,
  }),
  error: (prevState = null, error) => ({
    data: prevState,
    error: error.toString(),
  }),
};

const handleAsyncActions = (callback) => {
  return (type) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
      switch (action.type) {
        case SUCCESS:
          return callback(state, action);
        case ERROR:
          const prevsState = state.posts && state.posts.data;
          return {
            ...state,
            posts: tweetsReducerUtils.error(prevsState, action.payload),
          };
        default:
          return state;
      }
    };
  };
};

const getAsyncActionCallback = (state, action) => ({
  ...state,
  posts: tweetsReducerUtils.success(action.payload),
});

const postAsyncActionCallback = (state, action) => {
  return {
    ...state,
    posts: {
      data: state.posts.data,
      error: null,
    },
  };
};

const deleteAsyncActionCallback = (state, action) => ({
  ...state,
  posts: {
    data: state.posts.data,
    error: null,
  },
});

const updateAsyncActionCallback = (state, action) => ({
  ...state,
  posts: {
    data: state.posts.data,
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

export const onSyncCreateAction = (state, action) => {
  const result = action.payload;
  return {
    ...state,
    posts: {
      data: result ? [result, ...state.posts.data] : state.posts.data,
      error: null,
    },
  };
};

export const onSyncDeleteAction = (state, action) => {
  return {
    ...state,
    posts: {
      data: state.posts.data
        ? state.posts.data.filter((tweet) => tweet.id !== action.payload)
        : null,
      error: null,
    },
  };
};

export const onSyncUpdateAction = (state, action) => {
  const id = action.payload.id;
  return {
    ...state,
    posts: {
      data: state.posts.data
        ? state.posts.data.map((tweet) => {
            console.log(tweet.id);
            if (tweet.id !== id) {
              return tweet;
            }
            console.log(action.payload);
            return action.payload;
          })
        : null,
      error: null,
    },
  };
};
