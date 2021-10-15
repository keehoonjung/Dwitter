import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Login from "../components/login/login";
import { loginId } from "../module/users";

const LoginContainer = (props) => {
  const { loading, error, login } = useSelector((state) => state.user.user);
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
  }, [login, history]);

  if (loading) return <div>로딩중입니다</div>;
  return (
    <>
      <Login onLoginId={onLoginId} error={error} />
    </>
  );
};

export default LoginContainer;
