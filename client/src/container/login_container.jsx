import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/login/login";
import TokenStorage from "../db/token";
import { createId, loginId } from "../module/user";
const tokenStorage = new TokenStorage();
const initialToken = tokenStorage.getToken();

const LoginContainer = (props) => {
  const { error, token = initialToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLoginId = (username, password) => {
    dispatch(loginId({ username, password }));
  };
  const onCreateId = (username, password, name, email, url) => {
    const user = { username, password, name, email, url };
    Object.keys(user).map((data) => {
      if (user[data] === "") {
        user[data] = null;
      }
      return data;
    });
    dispatch(createId(user));
  };
  useEffect(() => {
    if (token) {
      window.location.replace("/main");
    }
  }, [token]);

  return (
    <>
      <Login onLoginId={onLoginId} onCreateId={onCreateId} error={error} />
    </>
  );
};

export default LoginContainer;
