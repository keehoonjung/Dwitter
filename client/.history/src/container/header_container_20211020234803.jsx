import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/header";
import { logoutId, me } from "../module/user";

const HeaderContainer = (props) => {
  const { data, token } = useSelector((state) => state.user);
  console.log(data);
  console.log(token);
  const dispatch = useDispatch();
  const onLogoutId = () => {
    dispatch(logoutId());
  };
  useEffect(() => {
    dispatch(me());
  }, [dispatch]);

  return <Header data={data} onLogoutId={onLogoutId} />;
};

export default HeaderContainer;
