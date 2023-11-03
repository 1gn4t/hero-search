import { useSelector } from "react-redux";
import { selectConnections } from "../../store/search/seacrh.selectors";
import { List, Item, Tittle, Text } from "./ConnectionsPage.styled";

export default function ConnectionsPage() {
  const connections = useSelector(selectConnections);

  return (
    <List>
      {connections.map((item, id) => {
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
