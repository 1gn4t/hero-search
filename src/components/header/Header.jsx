import { useLocation, useNavigate } from "react-router";
import Search from "../search/Search";
import {
  HeaderContainer,
  HeaderLogo,
  SingInButton,
  SingOutButton,
  BtnContainer,
} from "./Header.styled";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/userSlice";

export default function Header() {
  const user = useSelector((store) => store.user.user);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const goHome = () => navigate("/");

  const handlerSingIn = () => {
    navigate("/auth");
  };

  const handlerSingOut = () => {
    dispatch(signOut());
    goHome();
  };

  return (
    <HeaderContainer>
      <HeaderLogo onClick={goHome}>
        Super<span>Hero.</span>
      </HeaderLogo>
      {pathname === `/search` && <Search />}
      <BtnContainer>
        {user ? (
          <SingOutButton onClick={handlerSingOut}>Sign Out</SingOutButton>
        ) : (
          <SingInButton onClick={handlerSingIn}>Sign In</SingInButton>
        )}
      </BtnContainer>
    </HeaderContainer>
  );
}
