import { useSelector } from "react-redux";
import SearchItem from "../search-item/SearchItem";
import { SearchListContainer } from "./SearchList.styled";

export default function SearchList() {
  const herosMap = useSelector((store) => store.search.herosMap);

  return (
    <SearchListContainer>
      {herosMap &&
        herosMap.map((hero) => {
          const { name, image, id } = hero;
          return <SearchItem key={id} id={id} name={name} imgUrl={image.url} />;
        })}
    </SearchListContainer>
  );
}
