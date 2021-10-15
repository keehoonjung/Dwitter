import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Login from "../components/login/login";
import { loginId } from "../module/users";

const LoginContainer = (props) => {
  const { loading, error, login } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const onLoginId = (id, password) => {
    dispatch(loginId(id, password));
  };
  useEffect(() => {
    if (login) {
      history.push({
        pathname: "/main",
      });
    }
  });
  if (loading) return <div>로딩중입니다</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  return <Login onLoginId={onLoginId} />;
};

export default LoginContainer;
