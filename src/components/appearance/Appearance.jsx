import { faStar } from "@fortawesome/free-solid-svg-icons";
import { AppearanceList, Item, Tittle, Text, Icon } from "./Appearance.styled";
import { useSearchContext } from "../../utils/useSearchContext";

export default function Appearance() {
  const { currHero } = useSearchContext();
  const appearance = Object.entries(currHero.appearance);

  return (
    <AppearanceList>
      {appearance.map((item, id) => {
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
    </AppearanceList>
  );
}
