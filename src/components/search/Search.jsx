import { createAction } from "../../utils/reducer";
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
  const { state, dispatch } = useSearchContext();

  const handlerChange = (e) => {
    const value = e.target.value;
    dispatch(createAction("SET_SEARCH_STRING", value));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!state.searchStr) return;
    dispatch(createAction("SET_CURRENT_HERO", state.herosMap[0]));
  };

  return (
    <SearchContainer onSubmit={handlerSubmit}>
      <SearchInput
        onChange={handlerChange}
        type="text"
        placeholder="Search your superhero here ..."
        name="search"
        value={state.searchStr}
      />
      <SearchButton type="submit">
        <Icon icon={faSearch} />
      </SearchButton>
      <SearchList />
    </SearchContainer>
  );
}
