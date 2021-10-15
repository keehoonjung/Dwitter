import React from "react";
import { useSelector } from "react-redux";

const HeaderContainer = (props) => {
  const { login, data } = useSelector((state) => state.user.user);
  return;
};

export default HeaderContainer;
