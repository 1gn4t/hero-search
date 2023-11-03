import { useSearchContext } from "../../utils/useSearchContext";
import Content from "../content/Content";
import { BodyContainer, ImgContainer } from "./Body.styled";

export default function Body() {
  const { state } = useSearchContext();

  return (
    <BodyContainer>
      <ImgContainer src={state.currHero.image.url} alt="" />
      <Content />
    </BodyContainer>
  );
}
