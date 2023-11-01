import { useSearchContext } from "../../utils/useSearchContext";
import SearchList from "../search-list/SearchList";
import {
  SearchContainer,
  SearchButton,
  SearchInput,
  Icon,
} from "./Search.styled";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const { searchStr, setSearchStr, herosMap, selectHeroAndClearInput } =
    useSearchContext();

  const handlerChange = (e) => {
    const value = e.target.value;
    setSearchStr(value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!searchStr) return;
    selectHeroAndClearInput(herosMap[0]);
  };

  return (
    <SearchContainer onSubmit={handlerSubmit}>
      <SearchInput
        onChange={handlerChange}
        type="text"
        placeholder="Search your superhero here ..."
        name="search"
        value={searchStr}
      />
      <SearchButton type="submit">
        <Icon icon={faSearch} />
      </SearchButton>
      <SearchList />
    </SearchContainer>
  );
}
