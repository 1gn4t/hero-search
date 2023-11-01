import { useSearchContext } from "../../utils/useSearchContext";
import Content from "../content/Content";
import { BodyContainer, ImgContainer } from "./Body.styled";

export default function Body() {
  const { currHero } = useSearchContext();

  return (
    <BodyContainer>
      <ImgContainer src={currHero.image.url} alt="" />
      <Content />
    </BodyContainer>
  );
}
