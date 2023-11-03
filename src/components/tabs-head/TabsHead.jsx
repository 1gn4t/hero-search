import { TabsHeadContainer, CustomLink } from "./TabsHead.styled";

export default function TabsHead() {
  return (
    <TabsHeadContainer>
      <CustomLink to="/">
        <span>powerstats</span>
      </CustomLink>
      <CustomLink to="biography">
        <span>biography</span>
      </CustomLink>
      <CustomLink to="appearance">
        <span>appearance</span>
      </CustomLink>
      <CustomLink to="connections">
        <span>connections</span>
      </CustomLink>
    </TabsHeadContainer>
  );
}
