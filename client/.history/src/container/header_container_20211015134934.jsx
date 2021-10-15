import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/header/header";

const HeaderContainer = (props) => {
  const { login, data } = useSelector((state) => state.user.user);
  console.log(data);
  data && console.log(data.username);
  return <Header login={login} data={data} />;
};

export default HeaderContainer;
