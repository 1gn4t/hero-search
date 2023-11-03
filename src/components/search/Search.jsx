import { useDispatch, useSelector } from "react-redux";
import SearchList from "../search-list/SearchList";
import {
  SearchContainer,
  SearchButton,
  SearchInput,
  Icon,
} from "./Search.styled";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  setCurrentHero,
  setSearchString,
} from "../../store/search/search.actions";
import { selectSearch } from "../../store/search/seacrh.selectors";

export default function Search() {
  const { herosMap, searchStr } = useSelector(selectSearch);
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    const value = e.target.value;
    dispatch(setSearchString(value));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!searchStr) return;
    dispatch(setCurrentHero(herosMap[0]));
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
      {searchStr && <SearchList />}
    </SearchContainer>
  );
}
