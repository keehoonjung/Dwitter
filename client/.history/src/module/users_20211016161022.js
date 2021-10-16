import { createUser, getUser } from "../api/users";
import {
  CreateIdPromiseThunk,
  createLoginPromiseThunk,
  userHandleAsyncActions,
  userReducerUtils,
} from "../util/user_async_utils";

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
  dipatch({ type: LOGOUT_ID_SUCCESS });
};

export const createId = CreateIdPromiseThunk(CREATE_ID, createUser);

const initialState = {
  user: userReducerUtils.initial,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ID:
    case LOGIN_ID_SUCCESS:
    case LOGIN_ID_ERROR:
      return userHandleAsyncActions(LOGIN_ID, "login");
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
