import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Login from "../components/login/login";
import { createId, loginId } from "../module/users";

const LoginContainer = (props) => {
  const { loading, error, login } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const onLoginId = (id, password) => {
    dispatch(loginId({ id, password }));
  };
  const onCreateId = (id, password, name, email, url) => {
    dispatch(createId({ id, password, name, email, url }));
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
      <Login onLoginId={onLoginId} onCreateId={onCreateId} error={error} />
    </>
  );
};

export default LoginContainer;
