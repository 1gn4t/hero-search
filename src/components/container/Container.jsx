import Header from "../header/Header";
import Body from "../body/Body";

import { Wrapper } from "./Container.styled";

export default function Container() {
  return (
    <Wrapper>
      <Header />
      <Body />
    </Wrapper>
  );
}
