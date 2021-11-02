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
    dispatch(createId({ username, password, name, email, url }));
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
