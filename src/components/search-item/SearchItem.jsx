import { useSearchContext } from "../../utils/useSearchContext";
import { SearchItemContainer } from "./SearchItem.styled";

export default function SearchItem({ name, imgUrl, id }) {
  const { herosMap, selectHeroAndClearInput } = useSearchContext();

  const handlerClick = () => {
    const targetHero = herosMap.find((hero) => hero.id === id);
    selectHeroAndClearInput(targetHero);
  };

  return (
    <SearchItemContainer onClick={handlerClick}>
      <img src={imgUrl} alt="" />
      <p>{name}</p>
    </SearchItemContainer>
  );
}
