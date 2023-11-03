import Search from "../search/Search";
import { HeaderContainer, HeaderLogo } from "./Header.styled";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo>
        Super<span>Hero.</span>
      </HeaderLogo>
      <Search />
    </HeaderContainer>
  );
}
