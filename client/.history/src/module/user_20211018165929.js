import {
  CreateIdPromiseThunk,
  createLoginPromiseThunk,
  userHandleAsyncActions,
  userReducerUtils,
} from "../util/user_async_utils";
import HttpClient from "../network/http";
import UserService from "../api/user";

const baseUrl = "http://localhost:8080";
const httpClient = new HttpClient(baseUrl);
const userService = new UserService(httpClient);

const LOGIN_ID = "LOGIN_ID";
const LOGIN_ID_SUCCESS = "LOGIN_ID_SUCCESS";
const LOGIN_ID_ERROR = "LOGIN_ID_ERROR";

const LOGOUT_ID = "LOGOUT_ID";
const LOGOUT_ID_SUCCESS = "LOGOUT_ID_SUCCESS";
const LOGOUT_ID_ERROR = "LOGOUT_ID_ERROR";

const CREATE_ID = "CREATE_ID";
const CREATE_ID_SUCCESS = "CREATE_ID_SUCCESS";
const CREATE_ID_ERROR = "CREATE_ID_ERROR";

export const loginId = createLoginPromiseThunk(LOGIN_ID, userService.getUser);

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
      return userHandleAsyncActions(LOGIN_ID, "login")(state, action);
    case LOGOUT_ID:
    case LOGOUT_ID_SUCCESS:
    case LOGOUT_ID_ERROR:
      return userHandleAsyncActions(LOGOUT_ID, "logout")(state, action);
    case CREATE_ID:
    case CREATE_ID_SUCCESS:
    case CREATE_ID_ERROR:
      return userHandleAsyncActions(CREATE_ID, "login")(state, action);
    default:
      return state;
  }
}
