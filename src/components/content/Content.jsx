import { useSelector } from "react-redux";
import TabsBody from "../tabs-body/TabsBody";
import TabsHead from "../tabs-head/TabsHead";

import { ContentContainer, ContentTitle } from "./Content.styled";
import { selectCurrHero } from "../../store/search/seacrh.selectors";

export default function Content() {
  const { name } = useSelector(selectCurrHero);
  return (
    <ContentContainer>
      <ContentTitle>{name}</ContentTitle>
      <TabsHead />
      <TabsBody />
    </ContentContainer>
  );
}
