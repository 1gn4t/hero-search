import { useSearchContext } from "../../utils/useSearchContext";
import SearchItem from "../search-item/SearchItem";
import { SearchListContainer } from "./SearchList.styled";

export default function SearchList() {
  const { herosMap } = useSearchContext();

  return (
    <SearchListContainer>
      {herosMap &&
        herosMap.slice(0, 5).map((hero) => {
          const { name, image, id } = hero;
          return <SearchItem key={id} id={id} name={name} imgUrl={image.url} />;
        })}
    </SearchListContainer>
  );
}
