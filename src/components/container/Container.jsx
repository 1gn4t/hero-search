import { useEffect } from "react";
import Header from "../header/Header";

import { Wrapper } from "./Container.styled";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/userSlice";

export default function Container() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}
