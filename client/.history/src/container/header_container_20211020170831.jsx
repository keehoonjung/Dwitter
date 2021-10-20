import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/header";
import { logoutId, me } from "../module/user";

const HeaderContainer = (props) => {
  const { data } = useSelector((state) => ({
    data: state.user.user.data,
  }));
  const dispatch = useDispatch();
  const onLogoutId = () => {
    dispatch(logoutId());
  };
  const Me = async () => {
    dispatch(me());
    console.log(data);
  };

  return <Header data={data} onLogoutId={onLogoutId} />;
};

export default HeaderContainer;
