import { useSelector } from "react-redux";
import { List, Item, Tittle, Text } from "./ConnectionsPage.styled";

export default function ConnectionsPage() {
  const { connections } = useSelector((store) => store.search.currHero);

  return (
    <List>
      {Object.entries(connections).map((item, id) => {
        const [title, value] = item;
        return (
          <Item key={id}>
            <Tittle>{title}</Tittle>
            <Text>{value}</Text>
          </Item>
        );
      })}
    </List>
  );
}
