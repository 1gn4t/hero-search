import { useLocation, useNavigate } from "react-router";
import Search from "../search/Search";
import {
  HeaderContainer,
  HeaderLogo,
  SingInButton,
  SingOutButton,
  BtnContainer,
} from "./Header.styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user.selectors";
import { signOutUser } from "../../API/firebase";

export default function Header() {
  const user = useSelector(selectUser);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const goHome = () => navigate("/");

  const handlerSingIn = () => {
    navigate("/auth");
  };

  const handlerSingOut = () => {
    signOutUser();
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
          <SingOutButton onClick={handlerSingOut}>Sing Out</SingOutButton>
        ) : (
          <SingInButton onClick={handlerSingIn}>Sing In</SingInButton>
        )}
      </BtnContainer>
    </HeaderContainer>
  );
}
