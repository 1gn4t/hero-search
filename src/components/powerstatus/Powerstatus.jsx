import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import {
  PowerstatusList,
  PowerstatusItem,
  PowerstatusTitle,
  PowerstatusText,
  Icon,
} from "./Powerstatus.styled";
import { useSearchContext } from "../../utils/useSearchContext";

export default function Powerstatus() {
  const { currHero } = useSearchContext();
  const powerstats = Object.entries(currHero.powerstats);

  return (
    <PowerstatusList>
      {powerstats.map((item, id) => {
        const [title, value] = item;
        return (
          <PowerstatusItem key={id}>
            <div>
              <Icon icon={faShieldHalved} />
              <PowerstatusTitle>{title}</PowerstatusTitle>
            </div>
            <PowerstatusText>{value}</PowerstatusText>
          </PowerstatusItem>
        );
      })}
    </PowerstatusList>
  );
}
