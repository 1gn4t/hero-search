import { useEffect } from "react";
import Header from "../header/Header";

import { Wrapper } from "./Container.styled";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { setUserStart } from "../../store/user/user.actions";

export default function Container() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserStart());
  }, []);

  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}
