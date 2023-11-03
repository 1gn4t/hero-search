import { useSelector } from "react-redux";
import { selectBiography } from "../../store/search/seacrh.selectors";
import { List, Item, Tittle, Text } from "./BiographyPage.styled";

export default function BiographyPage() {
  const biography = useSelector(selectBiography);

  return (
    <List>
      {biography.map((item, id) => {
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
