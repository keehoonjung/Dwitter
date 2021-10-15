import { getUser } from "../api/users";

const LOGIN_ID = "LOGIN_ID";
const LOGIN_ID_SUCCESS = "LOGIN_ID_SUCCESS";
const LOGIN_ID_ERROR = "LOGIN_ID_ERROR";

const CREATE_ID = "CREATE_ID";
const CREATE_ID_SUCCESS = "CREATE_ID_SUCCESS";
const CREATE_ID_ERROR = "CREATE_ID_ERROR";

export const login = (id, password) => async (dispatch) => {
  dispatch({ type: LOGIN_ID });
  try {
    const user = await getUser(id);
    if (user) {
      user.password === password
        ? dispatch({ type: LOGIN_ID_SUCCESS, payload: user })
        : dispatch({ type: LOGIN_ID_ERROR, plyload: "login fail" });
    } else {
      dispatch({ type: LOGIN_ID_ERROR, plyload: "login fail" });
    }
  } catch (e) {
    dispatch({ type: LOGIN_ID_ERROR, plyload: e });
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
          ...state.user,
          loading: false,
          login: true,
          data: action.payload,
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
    default:
      return state;
  }
}
