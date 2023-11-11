import { useSelector } from "react-redux";
import { List, Item, Tittle, Text } from "./BiographyPage.styled";

export default function BiographyPage() {
  const { biography } = useSelector((store) => store.search.currHero);

  return (
    <List>
      {Object.entries(biography).map((item, id) => {
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
