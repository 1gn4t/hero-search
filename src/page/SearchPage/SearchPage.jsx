import { BodyContainer, ImgContainer } from "./SearchPage.styled";
import Content from "../../components/content/Content";

import { useSelector } from "react-redux";
import { useGetHerosQuery } from "../../store/herosApi";

export default function SearchPage() {
  const { searchStr } = useSelector((store) => store.search);
  const { image, name } = useSelector((store) => store.search.currHero);
  useGetHerosQuery(searchStr);

  return (
    <BodyContainer>
      <ImgContainer src={image.url} alt={name} />
      <Content />
    </BodyContainer>
  );
}
