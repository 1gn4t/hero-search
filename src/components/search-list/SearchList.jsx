import { useSelector } from "react-redux";
import SearchItem from "../search-item/SearchItem";
import { SearchListContainer } from "./SearchList.styled";
import {
  selectFractionHerosMap,
  selectSearch,
} from "../../store/search/seacrh.selectors";

export default function SearchList() {
  const herosMap = useSelector(selectSearch);
  const herosList = useSelector(selectFractionHerosMap);

  return (
    <SearchListContainer>
      {herosMap &&
        herosList.map((hero) => {
          const { name, image, id } = hero;
          return <SearchItem key={id} id={id} name={name} imgUrl={image.url} />;
        })}
    </SearchListContainer>
  );
}
