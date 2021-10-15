import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/header/header";

const HeaderContainer = (props) => {
  const { login, data } = useSelector((state) => state.user.user);

  return <Header login={login} username={data} />;
};

export default HeaderContainer;
