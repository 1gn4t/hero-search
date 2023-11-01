import { useSearchContext } from "../../utils/useSearchContext";
import { BiographyList, Item, Tittle, Text } from "./Biography.styled";

export default function Biography() {
  const { currHero } = useSearchContext();
  const biography = Object.entries(currHero.biography);

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
