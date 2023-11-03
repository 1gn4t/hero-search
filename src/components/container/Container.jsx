import { useEffect } from "react";
import Header from "../header/Header";

import { Wrapper } from "./Container.styled";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/user/user.actions";
import { onAuthStateChangedUser } from "../../API/firebase";
import { selectUser } from "../../store/user/user.selectors";

export default function Container() {
  const user = useSelector(selectUser);
  console.log(user);
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
