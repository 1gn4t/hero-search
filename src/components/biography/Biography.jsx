import { useSearchContext } from "../../utils/useSearchContext";
import { BiographyList, Item, Tittle, Text } from "./Biography.styled";

export default function Biography() {
  const { state } = useSearchContext();
  const biography = Object.entries(state.currHero.biography);

  return (
    <BiographyList>
      {biography.map((item, id) => {
        const [title, value] = item;
        return (
          <Item key={id}>
            <Tittle>{title}</Tittle>
            <Text>{value}</Text>
          </Item>
        );
      })}
    </BiographyList>
  );
}
