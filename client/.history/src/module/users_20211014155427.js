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
  } catch (e) {
    console.log(e);
  }
};
