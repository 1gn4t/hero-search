import { TabsBodyContainer } from "./TabsBody.styled";
import Powerstatus from "../../page/PowerstatsPage/PowerstatsPage";
import Biography from "../../page/BiographyPage/BiographyPage";
import Appearance from "../../page/AppearancePage/AppearancePage";
import Connections from "../../page/ConnectionsPage/ConnectionsPage";

import { Outlet, Route, Routes } from "react-router-dom";

export default function TabsBody() {
  return (
    <TabsBodyContainer>
      <Outlet />
    </TabsBodyContainer>
  );
}
