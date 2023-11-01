import { useSearchContext } from "../../utils/useSearchContext";
import TabsBody from "../tabs-body/TabsBody";
import TabsHead from "../tabs-head/TabsHead";

import { ContentContainer, ContentTitle } from "./Content.styled";

export default function Content() {
  const { currHero } = useSearchContext();
  return (
    <ContentContainer>
      <ContentTitle>{currHero.name}</ContentTitle>
      <TabsHead />
      <TabsBody />
    </ContentContainer>
  );
}
