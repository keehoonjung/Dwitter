import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginId } from "../module/users";

const LoginContainer = (props) => {
  const { loading, login, data } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLoginId = (id, password) => {
    dispatch(loginId(id, password));
  };
  return;
};

export default LoginContainer;
