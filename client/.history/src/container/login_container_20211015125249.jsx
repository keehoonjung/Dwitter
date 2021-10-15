import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginContainer = (props) => {
  const { loading, login, data } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return;
};

export default LoginContainer;
