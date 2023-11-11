import { useSelector } from "react-redux";
import TabsBody from "../tabs-body/TabsBody";
import TabsHead from "../tabs-head/TabsHead";

import { ContentContainer, ContentTitle } from "./Content.styled";

export default function Content() {
  const { name } = useSelector((store) => store.search.currHero);
  return (
    <ContentContainer>
      <ContentTitle>{name}</ContentTitle>
      <TabsHead />
      <TabsBody />
    </ContentContainer>
  );
}
