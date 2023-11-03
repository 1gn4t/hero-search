import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { List, Item, Title, Text, Icon } from "./PowerstatsPage.styled";
import { selectPowerstats } from "../../store/search/seacrh.selectors";
import { useSelector } from "react-redux";

export default function PowerstatsPage() {
  const powerstats = useSelector(selectPowerstats);

  return (
    <List>
      {powerstats.map((item, id) => {
        const [title, value] = item;
        return (
          <Item key={id}>
            <div>
              <Icon icon={faShieldHalved} />
              <Title>{title}</Title>
            </div>
            <Text>{value}</Text>
          </Item>
        );
      })}
    </List>
  );
}
