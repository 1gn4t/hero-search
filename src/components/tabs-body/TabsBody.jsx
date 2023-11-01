import { Outlet } from "react-router-dom";
import { TabsBodyContainer } from "./TabsBody.styled";

export default function TabsBody() {
  return (
    <TabsBodyContainer>
      <Outlet />
    </TabsBodyContainer>
  );
}
