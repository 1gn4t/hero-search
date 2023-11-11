import { TabsBodyContainer } from "./TabsBody.styled";
import PowerstatsPage from "../../page/PowerstatsPage/PowerstatsPage";
import BiographyPage from "../../page/BiographyPage/BiographyPage";
import AppearancePage from "../../page/AppearancePage/AppearancePage";
import ConnectionsPage from "../../page/ConnectionsPage/ConnectionsPage";
import { useSelector } from "react-redux";

export default function TabsBody() {
  const { powerstats, biography, appearance, connections } = useSelector(
    (store) => store.tabs
  );

  const displayCurrentTab = () => {
    switch (true) {
      case powerstats:
        return <PowerstatsPage />;
      case biography:
        return <BiographyPage />;
      case appearance:
        return <AppearancePage />;
      case connections:
        return <ConnectionsPage />;
    }
  };

  return <TabsBodyContainer>{displayCurrentTab()}</TabsBodyContainer>;
}
