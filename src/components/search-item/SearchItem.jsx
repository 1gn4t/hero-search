import { useDispatch } from "react-redux";
import { SearchItemContainer } from "./SearchItem.styled";
import { setCurrHero } from "../../store/searchSlice";

export default function SearchItem({ name, imgUrl, id }) {
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(setCurrHero(id));
  };

  return (
    <SearchItemContainer onClick={handlerClick}>
      <img src={imgUrl} alt="" />
      <p>{name}</p>
    </SearchItemContainer>
  );
}
