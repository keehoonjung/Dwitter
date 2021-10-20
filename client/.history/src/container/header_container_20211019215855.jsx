import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/header";
import { logoutId } from "../module/user";

const HeaderContainer = (props) => {
  const { login, data } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const onLogoutId = () => {
    dispatch(logoutId());
  };

  return <Header login={login} data={data} onLogoutId={onLogoutId} />;
};

export default HeaderContainer;
