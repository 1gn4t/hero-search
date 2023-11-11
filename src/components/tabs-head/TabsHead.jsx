import { useDispatch, useSelector } from "react-redux";
import { TabsHeadContainer, CustomLink } from "./TabsHead.styled";
import { setTab } from "../../store/tabsSlice";

export default function TabsHead() {
  const dispatch = useDispatch();
  const tabs = useSelector((store) => store.tabs);
  const choiceTab = (value) => dispatch(setTab(value));

  return (
    <TabsHeadContainer>
      {Object.keys(tabs).map((value, index) => {
        return (
          <CustomLink
            key={index}
            className={tabs[value] && "active"}
            onClick={() => {
              choiceTab(value);
            }}
          >
            {value}
          </CustomLink>
        );
      })}
    </TabsHeadContainer>
  );
}
