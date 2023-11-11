import { faStar } from "@fortawesome/free-solid-svg-icons";
import { List, Item, Tittle, Text, Icon } from "./AppearancePage.styled";
import { useSelector } from "react-redux";

export default function AppearancePage() {
  const { appearance } = useSelector((store) => store.search.currHero);

  return (
    <List>
      {Object.entries(appearance).map((item, id) => {
        const [title, value] = item;
        return (
          <Item key={id}>
            <Tittle>
              <Icon icon={faStar} />
              {title}
            </Tittle>
            <Text>{Array.isArray(value) ? value[1] : value}</Text>
          </Item>
        );
      })}
    </List>
  );
}
