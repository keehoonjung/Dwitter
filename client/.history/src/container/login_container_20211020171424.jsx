import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Login from "../components/login/login";
import TokenStorage from "../db/token";
import { createId, loginId } from "../module/user";
const tokenStorage = new TokenStorage();
const initialToken = tokenStorage.getToken();

const LoginContainer = (props) => {
  const {
    loading,
    error,
    token = initialToken,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const onLoginId = (username, password) => {
    console.log(username, password);
    dispatch(loginId({ username, password }));
  };
  const onCreateId = (username, password, name, email, url) => {
    dispatch(createId({ username, password, name, email, url }));
  };
  useEffect(() => {
    if (token) {
      history.push({
        pathname: "/main",
      });
    }
  }, [token, history]);

  if (loading) return <div>로딩중입니다</div>;
  return (
    <>
      <Login onLoginId={onLoginId} onCreateId={onCreateId} error={error} />
    </>
  );
};

export default LoginContainer;
