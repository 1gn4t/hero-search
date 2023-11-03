import { useSearchContext } from "../../utils/useSearchContext";
import { ConnectionsList, Item, Tittle, Text } from "./Connections.styled";

export default function Connections() {
  const { state } = useSearchContext();
  const connections = Object.entries(state.currHero.connections);

  return (
    <ConnectionsList>
      {connections.map((item, id) => {
        const [title, value] = item;
        return (
          <Item key={id}>
            <Tittle>{title}</Tittle>
            <Text>{value}</Text>
          </Item>
        );
      })}
    </ConnectionsList>
  );
}
