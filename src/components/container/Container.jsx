import { useEffect } from "react";
import Header from "../header/Header";

import { Wrapper } from "./Container.styled";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user/user.actions";
import { onAuthStateChangedUser } from "../../API/firebase";

export default function Container() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChangedUser((user) => {
      dispatch(setUser(user));
    });
  }, []);

  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}
