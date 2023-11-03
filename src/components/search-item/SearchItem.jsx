import { useDispatch, useSelector } from "react-redux";
import { SearchItemContainer } from "./SearchItem.styled";
import { selectSearch } from "../../store/search/seacrh.selectors";
import { setCurrentHero } from "../../store/search/search.actions";

export default function SearchItem({ name, imgUrl, id }) {
  const { herosMap } = useSelector(selectSearch);
  const dispatch = useDispatch();

  const handlerClick = () => {
    const targetHero = herosMap.find((hero) => hero.id === id);
    dispatch(setCurrentHero(targetHero));
  };

  return (
    <SearchItemContainer onClick={handlerClick}>
      <img src={imgUrl} alt="" />
      <p>{name}</p>
    </SearchItemContainer>
  );
}
