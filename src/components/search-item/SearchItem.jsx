import { createAction } from "../../utils/reducer";
import { useSearchContext } from "../../utils/useSearchContext";
import { SearchItemContainer } from "./SearchItem.styled";

export default function SearchItem({ name, imgUrl, id }) {
  const { state, dispatch } = useSearchContext();

  const handlerClick = () => {
    const targetHero = state.herosMap.find((hero) => hero.id === id);
    dispatch(createAction("SET_CURRENT_HERO", targetHero));
  };

  return (
    <SearchItemContainer onClick={handlerClick}>
      <img src={imgUrl} alt="" />
      <p>{name}</p>
    </SearchItemContainer>
  );
}
