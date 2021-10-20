import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/header";
import { logoutId } from "../module/user";

const HeaderContainer = (props) => {
  const { data } = useSelector((state) => state.user);
  console.log(data);
  const dispatch = useDispatch();
  const onLogoutId = () => {
    dispatch(logoutId());
  };

  return <Header data={data} onLogoutId={onLogoutId} />;
};

export default HeaderContainer;
