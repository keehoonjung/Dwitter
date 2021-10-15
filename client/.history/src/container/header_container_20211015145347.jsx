import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/header";

const HeaderContainer = (props) => {
  const { login, data } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return <Header login={login} data={data} />;
};

export default HeaderContainer;
