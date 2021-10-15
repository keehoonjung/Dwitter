import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginId } from "../module/users";

const LoginContainer = (props) => {
  const { loading, login, data, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLoginId = (id, password) => {
    dispatch(loginId(id, password));
  };
  if (loading) return <div>로딩중입니다</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  return;
};

export default LoginContainer;
