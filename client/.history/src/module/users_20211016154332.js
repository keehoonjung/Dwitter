import { createUser, getUser } from "../api/users";
import { createLoginPromiseThunk } from "../util/user_async_utils";

const LOGIN_ID = "LOGIN_ID";
const LOGIN_ID_SUCCESS = "LOGIN_ID_SUCCESS";
const LOGIN_ID_ERROR = "LOGIN_ID_ERROR";

const LOGOUT_ID = "LOGOUT_ID";
const LOGOUT_ID_SUCCESS = "LOGOUT_ID_SUCCESS";
const LOGOUT_ID_ERROR = "LOGOUT_ID_ERROR";

const CREATE_ID = "CREATE_ID";
const CREATE_ID_SUCCESS = "CREATE_ID_SUCCESS";
const CREATE_ID_ERROR = "CREATE_ID_ERROR";

export const loginId = createLoginPromiseThunk(LOGIN_ID, getUser);

export const logoutId = () => (dipatch) => {
  dipatch({ type: LOGOUT_ID });
  try {
    dipatch({ type: LOGOUT_ID_SUCCESS });
  } catch (e) {
    dipatch({ type: LOGOUT_ID_ERROR, payload: e });
  }
};

export const createId =
  (username, password, name, email, url) => async (dipatch) => {
    dipatch({ type: CREATE_ID });
    if (password.length < 5) {
      return dipatch({
        type: CREATE_ID_ERROR,
        payload: "Error: password should be at least 5 characters",
      });
    }
    try {
      const user = await getUser(username);
      return dipatch({
        type: CREATE_ID_ERROR,
        payload: `Error: ${user.username} already exists`,
      });
    } catch (e) {}

    try {
      const payload = await createUser({
        username,
        password,
        name,
        email,
        url,
      });
      dipatch({ type: CREATE_ID_SUCCESS, payload });
    } catch (e) {
      dipatch({
        type: CREATE_ID_ERROR,
        payload: e,
      });
    }
  };

const initialState = {
  user: {
    loading: false,
    login: false,
    data: null,
    error: null,
  },
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ID:
      return {
        user: {
          ...state.user,
          loading: true,
        },
      };
    case LOGIN_ID_SUCCESS:
      return {
        user: {
          loading: false,
          login: true,
          data: action.payload,
          error: null,
        },
      };
    case LOGIN_ID_ERROR:
      return {
        user: {
          ...state.user,
          loading: false,
          error: action.payload,
        },
      };
    case LOGOUT_ID:
      return {
        user: {
          ...state.user,
          loading: true,
        },
      };
    case LOGOUT_ID_SUCCESS:
      return {
        user: {
          ...state.user,
          loading: false,
          login: false,
          data: null,
        },
      };
    case LOGOUT_ID_ERROR:
      return {
        user: {
          ...state.user,
          loading: false,
          error: action.payload,
        },
      };
    case CREATE_ID:
      return {
        user: {
          ...state.user,
          loading: true,
        },
      };
    case CREATE_ID_SUCCESS:
      return {
        user: {
          loading: false,
          login: true,
          data: action.payload,
          error: null,
        },
      };
    case CREATE_ID_ERROR:
      return {
        user: {
          ...state.user,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}
