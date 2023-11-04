import { useDispatch, useSelector } from "react-redux";
import { TabsHeadContainer, CustomLink } from "./TabsHead.styled";
import { selectTabs } from "../../store/tabs/tabs.selectors";
import { setCurrentTab } from "../../store/tabs/tabs.actions";

export default function TabsHead() {
  const dispatch = useDispatch();
  const tabs = useSelector(selectTabs);
  const choiceTab = (value) => dispatch(setCurrentTab(value));

  return (
    <TabsHeadContainer>
      {Object.keys(tabs).map((value, index) => {
        return (
          <CustomLink
            key={index}
            className={tabs[value] && "active"}
            onClick={() => choiceTab(value)}
          >
            {value}
          </CustomLink>
        );
      })}
    </TabsHeadContainer>
  );
}
